import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CartReducer from "./reducer/CartReducer";

const store = createStore(CartReducer, applyMiddleware(thunk));

export default store;
