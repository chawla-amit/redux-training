import { SET_CHARACTERS } from "../constants";

const initialState = {
  items: []
};

const charactersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHARACTERS:
      return { ...state, items: [...payload] };
    default:
      return state;
  }
};

export default charactersReducer;
