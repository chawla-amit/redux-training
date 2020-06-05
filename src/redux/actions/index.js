import {
  ADD_TO_CART,
  REMOVE_ITEM_FROM_CART,
  TOGGLE_CART,
  SET_CHARACTERS,
  FETCH_CHARACTERS
} from "../constants";

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item
});

export const removeItemFromCart = item => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item
});

export const toggleCart = () => ({
  type: TOGGLE_CART
});

export const setCharacters = characters => ({
  type: SET_CHARACTERS,
  payload: characters
});

export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS
});
