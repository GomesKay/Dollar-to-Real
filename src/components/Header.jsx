import dollarRealLogo from "../assets/logo_dollar_to_real.png";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={dollarRealLogo} alt="" />
      <h2>DOLLAR TO REAL</h2>
    </header>
  );
}
