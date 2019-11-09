import { takeEvery, call, put } from "@redux-saga/core/effects";
import { USER_LOGIN } from "$store/types/";

import apiPaths from '$constants/apiPaths';
import Axios from "axios";
import { USER_LOGIN_SUCCESS } from "../types";


function* watchUserLogin() {
    yield takeEvery(USER_LOGIN, workUserLogin)
}

function* workUserLogin({ payload }) {

    let { email, password } = payload

    try {
        const res = yield call(Axios.post, apiPaths.login, { email, password });
        const data = res.data;
        const user = data.user;
        if (data.status) yield put({
            type: USER_LOGIN_SUCCESS,
            payload: {
                email: user.email,
                name: user.name,
                surname: user.surname,
                userId: user._id,
                token: data.token
            }
        })
    } catch (error) {

    }
}

export {
    watchUserLogin
}