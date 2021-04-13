import {
  ADD_PIZZA,
  CLEAR_CART,
  GET_PIZZAS,
  REMOVE_ONE_PIZZA,
  REMOVE_PIZZA,
  UPDATE_QUANTITY,
  UPDATE_SUMM,
} from "../boilerplate";

export function getPizzas() {
  return {
    type: GET_PIZZAS,
  };
}

export function addPizza(pizza) {
  return {
    type: ADD_PIZZA,
    payload: pizza,
  };
}
export function updateSumm() {
  return {
    type: UPDATE_SUMM,
  };
}
export function updateQuantity() {
  return {
    type: UPDATE_QUANTITY,
  };
}
export function removeOnePizza(id) {
  return {
    type: REMOVE_ONE_PIZZA,
    payload: id,
  };
}
export function removePizza(id) {
  return {
    type: REMOVE_PIZZA,
    payload: id,
  };
}
export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}
//thunk
export function removeOnePizzaFromCart(id) {
  return (dispatch) => {
    dispatch(removeOnePizza(id));
    dispatch(updateSumm());
    dispatch(updateQuantity());
  };
}

export function removePizzaFromCart(id) {
  return (dispatch) => {
    dispatch(removePizza(id));
    dispatch(updateSumm());
    dispatch(updateQuantity());
  };
}

export function addPizzaToCart(pizza) {
  return (dispatch) => {
    dispatch(addPizza(pizza));
    dispatch(updateSumm());
    dispatch(updateQuantity());
  };
}
