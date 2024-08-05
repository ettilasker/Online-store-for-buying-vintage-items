import { combineReducers } from "redux";
import { CartReducer } from "./CartReducer";
import { productReducer } from "./ProductReducer";

export const allReducers = combineReducers({
    CartReducer: CartReducer,
    productReducer: productReducer
})