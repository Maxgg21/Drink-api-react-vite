import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrashAlt, faXmarkCircle} from '@fortawesome/free-regular-svg-icons'
import styles from "./CartModal.module.css";
import useModal from '../../hooks/useModal';


export default function CartModal() {
  const { isOpen, toogleModal} = useModal();


  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
      <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} />
        <h2>Mi Carrito</h2>
        <section className={styles.modalBody}>
          <div className={styles.modalDrinksListContainer}>
            <article className={styles.card}>
              <img src="https://www.thecocktaildb.com/images/media/drink/uxxtrt1472667197.jpg" alt="trago" />
              <span>Nombre</span>
              <span>Precio</span>
              <div className={styles.counter}>
                <button>-</button>
                <span>7</span>
                <button>-</button>
              </div>
              <FontAwesomeIcon icon={faTrashAlt} className={styles.iconTrash}/>
            </article> 
          </div>
          <aside>
            <p>SubTotal: xxxxx</p>
            <p>Total: xxxxx</p>
            <div className={styles.btnContainer}>
              <button className={styles.clearCart}>Vaciar carrito</button>
              <button className={styles.confirmOrder}>Confirmar compra</button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
