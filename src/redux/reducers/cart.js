import { ADD_CART_ITEM, REMOVE_CART_ITEM, TOGGLE_CART } from "../constants";

const initialState = {
  showCart: false,
  count: 0,
  items: []
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CART_ITEM:
      const { items } = state;
      const updatedItems = [...items, { ...payload }];
      return { ...state, items: updatedItems, count: updatedItems.length };
    case REMOVE_CART_ITEM:
      const updatedItemsRemove = state.items.filter(
        cartItem => cartItem.id !== payload.id
      );
      return {
        ...state,
        items: updatedItemsRemove,
        count: updatedItemsRemove.length
      };
    case TOGGLE_CART:
      return { ...state, showCart: !state.showCart };
    default:
      return state;
  }
};

export default cartReducer;
