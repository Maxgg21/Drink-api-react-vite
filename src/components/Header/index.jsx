import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import useModal from "../../hooks/useModal";


export default function header() {
  const {toogleModal} = useModal()

  return (
    <header className={`p-5 ${styles.header}`}>
      <h1>Buscador de Bebidas</h1>
      <FontAwesomeIcon icon={faCartShopping} onClick={() => toogleModal()} className={styles.iconCart}/>
    </header>
  );
}
