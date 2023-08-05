

import styles from "./cartModal.module.css";

export default function CartModal() {
  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <i>X</i>
        <h2>Mi Carrito</h2>
        <section className={styles.modalBody}>
          <div className={styles.modalDrinksListContainer}>
            <article className={styles.card}>
              <img src="" alt="" />
              <span>Nombre</span>
              <span>Precio</span>
              <div className={styles.counter}>
                <button>-</button>
                <span>Cantidad</span>
                <button>-</button>
              </div>
              <i>L</i>
            </article>
          </div>
          <aside>
            <p>SubTotal: xxxxx</p>
            <p>Total: xxxxx</p>
            <div className={styles.btnContainer}>
              <button>Vaciar carrito</button>
              <button>Confirmar compra</button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
