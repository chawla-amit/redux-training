import { ADD_TO_CART, REMOVE_ITEM_FROM_CART, TOGGLE_CART } from "../constants";

const cartInitialState = {
  count: 0,
  items: [],
  showCart: true
};

const cartReducer = (state = cartInitialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const updatedState = [...state.items, { ...payload }];
      return {
        ...state,
        items: [...state.items, { ...payload }],
        count: updatedState.length
      };
    case REMOVE_ITEM_FROM_CART:
      const deletedState = state.items.filter(item => item.id !== payload.id);
      return {
        ...state,
        items: deletedState,
        count: deletedState.length
      };
    case TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart
      };
    default:
      return state;
  }
};

export default cartReducer;
