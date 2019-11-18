import Axios from "axios";
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
  userSearchLoadingAction,
  userSearchErrorAction
} from "$store/actions/userSearch";
import { logouthAction } from "$store/actions/user";

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

    if (!data.users) throw data;

    yield put(userSearchSuccessAction(data.users));
  } catch ({ errorText, status }) {
    if (status === 401) {
      yield put(logouthAction());
    } else yield put(userSearchErrorAction({ errorText }));
  }
}

function* watchUserSearch() {
  yield takeLatest(SEARCH_USER, workUserSearch);
}

// eslint-disable-next-line import/prefer-default-export
export { watchUserSearch };
