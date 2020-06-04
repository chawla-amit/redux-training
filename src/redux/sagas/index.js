import { takeEvery, all, call, put, delay } from "redux-saga/effects";
import { fetchCharacters } from "../../api";
import { FETCH_CHARACTERS } from "../constants";
import { setCharacters, showLoader, hideLoader } from "../actions";

function* fetchCharactersData(action) {
  yield put(showLoader());
  const characters = yield call(fetchCharacters, action.payload);
  yield delay(1500);
  yield put(setCharacters(characters));
  yield put(hideLoader());
}

export default function* rootSaga() {
  yield all([takeEvery(FETCH_CHARACTERS, fetchCharactersData)]);
}
