import {
  ADD_PIZZA,
  CLEAR_CART,
  UPDATE_SUMM,
  REMOVE_ONE_PIZZA,
  REMOVE_PIZZA,
  UPDATE_QUANTITY,
} from "../boilerplate";
import {
  AddPizzaOrQuantity,
  getQuantity,
  getTotalSumm,
  removeOnePizzaFromList,
  removePizzaFromList,
} from "./Cart.utilites";

const initialState = {
  items: [],
  quantity: 0,
  totalSumm: 0,
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PIZZA: {
      return (state = {
        ...state,
        items: AddPizzaOrQuantity(action.payload, state.items),
      });
    }
    case REMOVE_ONE_PIZZA: {
      return (state = {
        ...state,
        items: removeOnePizzaFromList(action.payload, state.items),
      });
    }
    case REMOVE_PIZZA: {
      return (state = {
        ...state,
        items: removePizzaFromList(action.payload, state.items),
      });
    }
    case CLEAR_CART: {
      return (state = {
        ...state,
        items: [],
        quantity: 0,
        totalSumm: 0,
      });
    }
    case UPDATE_SUMM: {
      return (state = { ...state, totalSumm: getTotalSumm(state.items) });
    }
    case UPDATE_QUANTITY: {
      return (state = { ...state, quantity: getQuantity(state.items) });
    }
    default:
      return (state = { ...state });
  }
}
