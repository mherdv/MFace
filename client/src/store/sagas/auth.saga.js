import Axios from "axios";
import { takeEvery, call, put } from "@redux-saga/core/effects";
import { USER_LOGIN } from "$store/types/";

import apiPaths from "$constants/apiPaths";
import {
  loginSuccessAction,
  loginFeildAction,
  loginLoadingAction,
  registrationLoadingAction,
  registrationFeildAction,
  registrationSuccessAction,
  logouthSuccessAction,
  clearRegistrationStoreAction
} from "../actions/user";
import { setToken, removeToken } from "$utils/token";
import { USER_LOGOUTH, USER_REGISTRATION } from "$store/types";

function* workUserLogin(action) {
  const { email, password } = action.payload;

  yield put(loginLoadingAction());

  try {
    const res = yield call(Axios.post, apiPaths.login, {
      email: email.value,
      password: password.value
    });

    const { data } = res;
    const { token } = data;
    const { user } = data;

    if (!data.status) throw data.errorText;
    setToken(token);

    const { name, surname, _id: userId } = user;

    yield put(
      loginSuccessAction({
        email: user.email,
        name,
        surname,
        userId,
        token
      })
    );
  } catch (error) {
    yield put(loginFeildAction(error));
  }
}

function* workUserLogouth(/* { payload } */) {
  removeToken();
  yield put(logouthSuccessAction());
}

function* workUserRegistration({ payload }) {
  const { email, password, gender, dateOfBirthday, surname, name } = payload;
  yield put(registrationLoadingAction());

  try {
    // get registration datas

    const requestObject = {
      email,
      password,
      gender,
      dateOfBirthday,
      surname,
      name
    };
    const res = yield call(Axios.post, apiPaths.registragion, requestObject);

    const { data } = res;
    if (data.status !== 200) throw data.error;

    yield put(
      registrationSuccessAction({
        status: 1
      })
    );
    yield put(clearRegistrationStoreAction());
  } catch (errors) {
    let errorText = "";

    Object.keys(errors).forEach(key => {
      errorText += errors[key].message;
    });

    yield put(registrationFeildAction(errorText));
  }
}

function* watchUserLogin() {
  yield takeEvery(USER_LOGIN, workUserLogin);
}

function* watchUserLogouth() {
  yield takeEvery(USER_LOGOUTH, workUserLogouth);
}

function* watchUserRegistration() {
  yield takeEvery(USER_REGISTRATION, workUserRegistration);
}

export { watchUserLogin, watchUserLogouth, watchUserRegistration };
