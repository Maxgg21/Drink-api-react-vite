import { actionTypes } from "../actions/cart.actions";
export const cartInitialState = {
    cartItems: [],
 };


export function cartReducer(state, { type, payload }) {
    const { idDrink } = payload;
    let drinkIsInCart = state.cartItems.find((item) => item.idDrink === idDrink);
    switch (type) {
      case actionTypes.ADD_TO_CART:
        if (drinkIsInCart) {
          let cartItemsUpDated = state.cartItems.map((item) => {
            if (item.idDrink === idDrink) {
              return {
                item,
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
        if (drinkIsInCart.quantity > 1) {
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
          if (drinkIsInCart) {
            let cartItemUpDated = state.cartItems.filter((item) => {
              item.drink !== idDrink;
            });
            return {
              ...state,
              cartItems: cartItemUpDated,
            };
          }
        }
      case actionTypes.REMOVE_ALL_FROM_CART:
        if (drinkIsInCart) {
          let cartItemsUpdated = state.cartItems.filter(item => item.idDrink !== idDrink);
          return {
            ...state,
            cartItems: cartItemsUpdated,
          };
        }
      case actionTypes.CLEAR_CART:
        return {
          ...state,
          cartItems: [],
        };
    }
  }
  