import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { ArrowFatLineDown } from "phosphor-react";
import imgDollar from "../../assets/img_dollar.svg";
import imgReal from "../../assets/img_real.svg";
import styles from "./styles.module.css";

export function Conversor() {
  const [dolar, setDolar] = useState("");
  const [real, setReal] = useState("");
  const cotacao = 4.86;

  function valueDolar(event) {
    const valorDolar = event.target.value;
    const calculoDolar = valorDolar * cotacao;
    setReal(calculoDolar.toFixed(2));
    setDolar();
  }

  function valueReal(event) {
    const valorReal = event.target.value;
    const calculoReal = valorReal / cotacao;
    setDolar(calculoReal.toFixed(2));
    setReal();
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>CONVERSOR DE MOEDAS</h1>
        <div>
          <img src={imgDollar} alt="" />
          <label>| Dólar Americano</label>
        </div>

        <input type="number" value={dolar} min={0} onChange={valueDolar} />

        <ArrowFatLineDown className={styles.arrow} size={32} />

        <div>
          <img src={imgReal} alt="" />
          <label>| Real Brasileiro</label>
        </div>

        <input type="number" value={real} min={0} onChange={valueReal} />

        <p>Obs: 1 Dólar Americano = 4,86 Real Brasileiro</p>

        <Link className={styles.link} to="/">
          Voltar
        </Link>
      </main>
    </>
  );
}
