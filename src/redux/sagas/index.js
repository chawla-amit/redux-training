import { FETCH_CHARACTERS } from "../constants";
import { takeEvery, put, call, all } from "redux-saga/effects";
import { fetchCharacters } from "../../api";
import { setCharacters } from "../actions";

function* fetchCharactersData() {
  const characters = yield call(fetchCharacters, "Bootleg");
  yield put(setCharacters(characters));
}

function* rootSaga() {
  yield all([takeEvery(FETCH_CHARACTERS, fetchCharactersData)]);
}

export default rootSaga;
