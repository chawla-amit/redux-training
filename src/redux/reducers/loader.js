import { SHOW_LOADER, HIDE_LOADER } from "../constants";

const initialState = {
  show: false
};

const loaderReducer = (state = initialState, { type }) => {
  switch (type) {
    case SHOW_LOADER:
      return { ...state, show: true };
    case HIDE_LOADER:
      return { ...state, show: false };
    default:
      return state;
  }
};

export default loaderReducer;
