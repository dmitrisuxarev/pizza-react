import {ADD_PIZZA,GET_PIZZAS, UPDATE_SUMM} from "../boilerplate";

export function getPizzas() {
    return {
        type:GET_PIZZAS
    }
}

export function addPizza(pizza){
    return {
        type: ADD_PIZZA,
        payload: pizza
    }
}
export function updateSumm(pizza){
    return {
        type: UPDATE_SUMM,
    }
}

export function addPizzaToCart(pizza){
    return dispatch => {
        dispatch(addPizza(pizza));
        dispatch(updateSumm())
    }
}