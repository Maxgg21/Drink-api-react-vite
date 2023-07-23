import styles from "./Header.module.css";

export default function header() {
  return (
    <header className={`p-5 ${styles.header}`}>
      <h1>Buscador de Bebidas</h1>
    </header>
  );
}
