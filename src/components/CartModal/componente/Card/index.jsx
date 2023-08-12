import PropTypes from "prop-types";
import useCart from "../../../../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from '../../componente/Card/Card.module.css'

export default function Card({ drink }) {
    const { addToCart, removeOneFromCart, removeAllFromCart } = useCart();
    return (
        <article className={styles.card}>
            <img src={drink.strDrinkThumb} alt="" />
            <span>{drink.strDrink}</span>
            <span>{drink.price}</span>
            <div className={styles.counter}>
                <button onClick={() => removeOneFromCart(drink.idDrink)}>-</button>
                <span>{drink.quantity}</span>
                <button onClick={() => addToCart(drink)}>+</button>
            </div>
            <FontAwesomeIcon icon={faTrash} className={styles.iconTrash} onClick={() => removeAllFromCart(drink.idDrink)} />
        </article>
    );
}

Card.propTypes = {
    drink: PropTypes.object.isRequired,
};