import { actionTypes } from "../actions/cart.actions";

export const cartInitialState = {
    cartItems: [],
};

export function cartReducer(state, { type, payload = {} }) {
    const { idDrink } = payload;
    let drinkInCart = state.cartItems.find((item) => item.idDrink === idDrink);
    switch (type) {
      case actionTypes.ADD_TO_CART:
        if (drinkInCart) {
          let cartItemsUpDated = state.cartItems.map(item => {
            if (item.idDrink === idDrink) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          });
          return {
            ...state,
            cartItems: cartItemsUpDated,
          };
        } else {
          payload.quantity = 1;
          return {
            ...state,
            cartItems: [...state.cartItems, payload],
          };
        }
      case actionTypes.REMOVE_ONE_FROM_CART:
        if (drinkInCart.quantity > 1) {
          let cartItemUpDated = state.cartItems.map((item) => {
            if (item.idDrink === idDrink) {
              // Quantity > 1 ? => restar 1
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
            return item;
          });
          return {
            ...state,
            cartItems: cartItemUpDated,
          };
        } else {
            let cartItemUpDated = state.cartItems.filter((item) => {
              return item.idDrink !== idDrink;
            });
            return {
              ...state,
              cartItems: cartItemUpDated,
            };
        }
      case actionTypes.REMOVE_ALL_FROM_CART:
        if (drinkInCart) {
          let cartItemsUpdated = state.cartItems.filter(item => { return item.idDrink !== idDrink});
          return {
            ...state,
            cartItems: cartItemsUpdated,
          };
        }
        return state;
      case actionTypes.CLEAR_CART:
        return {
          ...state,
          cartItems: [],
        };
    }
  }
  