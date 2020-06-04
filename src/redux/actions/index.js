import {
  FETCH_CHARACTERS,
  SET_CHARACTERS,
  ADD_CART_ITEM,
  SHOW_LOADER,
  HIDE_LOADER,
  REMOVE_CART_ITEM,
  TOGGLE_CART
} from "../constants";

export const fetchCharacters = searchTerm => ({
  type: FETCH_CHARACTERS,
  payload: searchTerm
});

export const setCharacters = characters => ({
  type: SET_CHARACTERS,
  payload: characters
});

export const addCartItem = item => ({
  type: ADD_CART_ITEM,
  payload: item
});

export const removeCartItem = item => ({
  type: REMOVE_CART_ITEM,
  payload: item
});

export const toggleCart = () => ({
  type: TOGGLE_CART
});

export const showLoader = () => ({
  type: SHOW_LOADER
});

export const hideLoader = () => ({
  type: HIDE_LOADER
});
