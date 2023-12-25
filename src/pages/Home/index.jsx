import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import dollarReal from "../../assets/img_dollar_real.png";
import styles from "./styles.module.css";

export function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <img src={dollarReal} />
        <div className={styles.content}>
          <h1>CONVERSOR</h1>
          <h3>de Moedas</h3>
        </div>
        <p>
          Neste projeto será apresentado um conversor de
          <br />
          moedas Dólar para Real. Navegue pela página para
          <br />
          conhecer mais sobre...
        </p>

        <Link className={styles.link} to="/conversor">
          Entrar
        </Link>
      </main>
    </>
  );
}
