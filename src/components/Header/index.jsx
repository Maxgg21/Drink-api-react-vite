import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


export default function header() {
  return (
    <header className={`p-5 ${styles.header}`}>
      <h1>Buscador de Bebidas</h1>
      <FontAwesomeIcon icon={faCartShopping}/>
    </header>
  );
}
