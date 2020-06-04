import { combineReducers } from "redux";
import cartReducer from "./cart";
import loaderReducer from "./loader";
import charactersReducer from "./characters";

const rootReducer = combineReducers({
  cart: cartReducer,
  loader: loaderReducer,
  characters: charactersReducer
});

export default rootReducer;
