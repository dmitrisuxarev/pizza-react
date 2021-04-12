import { ADD_PIZZA, UPDATE_SUMM } from "../boilerplate"
import { containsPizza, getTotalSumm } from "./Cart.utilites"

const initialState = {
    items : [
        {
            "id": 2,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
            "name": "Цыпленок барбекю",
            "types": [0],
            "sizes": [26, 40],
            "price": 295,
            "category": 1,
            "rating": 4,
            "quantity":2,
          },
          {
            "id": 3,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
            "name": "Кисло-сладкий цыпленок",
            "types": [1],
            "sizes": [26, 30, 40],
            "price": 275,
            "category": 2,
            "rating": 2,
            "quantity":2,
          },
          {
            "id": 4,
            "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
            "name": "Чизбургер-пицца",
            "types": [0, 1],
            "sizes": [26, 30, 40],
            "price": 415,
            "category": 3,
            "rating": 8,
            "quantity":2,
          },
    ],
    quantity:6,
    totalSumm:1970
}

export default function CartReducer(state=initialState,action){
    switch (action.type) {
        case ADD_PIZZA:{
            return state ={
                ...state,
                items: containsPizza(action.payload,state.items),
                quantity: state.quantity+1,
            }
        };
        case UPDATE_SUMM:{
            return state = {...state,totalSumm:getTotalSumm(state.items)}
        }
        default:
            return state = {...state}
    }
}