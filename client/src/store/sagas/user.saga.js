import Axios from "$utils/axios";
import {
  /* takeEvery, */
  call,
  put,
  takeLatest
} from "@redux-saga/core/effects";
import { SEARCH_USER } from "$store/types";
import apiPaths from "$constants/apiPaths";
import {
  userSearchSuccessAction,
  userSearchLoadingAction
} from "$store/actions/userSearch";

function* workUserSearch(action) {
  yield put(userSearchLoadingAction());

  try {
    const requestBody = {
      fullName: action.payload.fullName
    };

    const res = yield call(Axios.post, apiPaths.searchUser, requestBody, {
      headers: action.headers
    });
    const { data } = res;

    yield put(userSearchSuccessAction(data.users));
  } catch ({ response }) {}
}

function* watchUserSearch() {
  yield takeLatest(SEARCH_USER, workUserSearch);
}

// eslint-disable-next-line import/prefer-default-export
export { watchUserSearch };
