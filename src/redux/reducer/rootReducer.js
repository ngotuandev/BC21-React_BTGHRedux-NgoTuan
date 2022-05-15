import { combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";

export const rootReducer = combineReducers({
  Product: ProductReducer,
});
