import { combineReducers } from "redux";
import cart from "./cart.reducer";
import characters from "./characters.reducer";

const rootReducer = combineReducers({
  cart,
  characters
});

export default rootReducer;
