import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrashAlt, faXmarkCircle} from '@fortawesome/free-regular-svg-icons'
import styles from "./CartModal.module.css";
import useModal from '../../hooks/useModal';
import useCart  from '../../hooks/useCart';
import  Card  from './componente/Card';


export  default function CartModal() {
  const {isOpen, toogleModal} = useModal()
  const {
    cart,  
    clearCart
  } = useCart()
  if (isOpen) return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
      <FontAwesomeIcon icon={faXmarkCircle} className={styles.icon} onClick={() => toogleModal()}/>
        <h2>Mi Carrito</h2>
        <section className={styles.modalBody}>
          <div className={styles.modalDrinksListContainer}>
            {cart.cartItems.length == 0 && (
              <h3>No hay productos en el carrito</h3>
            )}
            {cart.cartItems.map((drink) => (
                <Card key={drink.idDrink} drink={drink} />
            ))}
            
          </div>
          <aside>
            <p>SubTotal: xxxxx</p>
            <p>Total: xxxxx</p>
            <div className={styles.btnContainer}>
              <button className={styles.clearCart} onClick={() => clearCart()}>Vaciar carrito</button>
              <button className={styles.confirmOrder}>Confirmar compra</button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

