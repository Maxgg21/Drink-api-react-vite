import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { actionTypes } from "../actions/cart.actions";
import { cartInitialState, cartReducer } from "../reducers/cartReducer";

const CartContext = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  function addToCart(drink) {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: drink });
  }

  function removeOneFromCart(drinkId) {
    dispatch({ type: actionTypes.REMOVE_ONE_FROM_CART, payload: drinkId });
  }

  function removeAllFromCart(drinkId) {
    dispatch({ type: actionTypes.REMOVE_ALL_FROM_CART, payload: drinkId });
  }

  function clearCart() {
    dispatch({ type: actionTypes.CLEAR_CART });
  }

  const cartValues = {
    cart: state,
    addToCart,
    removeOneFromCart,
    removeAllFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartProvider, CartContext };
