import { takeEvery, call, put } from "@redux-saga/core/effects";
import { USER_LOGIN } from "$store/types/";

import apiPaths from '$constants/apiPaths';
import Axios from "axios";
import { loginSuccessAction, loginFeildAction, logouthAction, loginLoadingAction, registrationLoadingAction, registrationFeildAction, registrationSuccessAction } from "../actions/user";
import { setToken, removeToken } from "$utils/token";
import { USER_LOGOUTH, USER_REGISTRATION } from "$store/types";


function* watchUserLogin() {
    yield takeEvery(USER_LOGIN, workUserLogin)
}

function* watchUserLogouth() {
    yield takeEvery(USER_LOGOUTH, workUserLogouth)
}

function* watchUserRegistration() {
    yield takeEvery(USER_REGISTRATION, workUserRegistration)
}


function* workUserLogin(action) {

    let { email, password } = action.payload;

    yield put(loginLoadingAction())

    try {
        const res = yield call(Axios.post, apiPaths.login, { email, password });
        const data = res.data;
        const token = data.token;
        const user = data.user;

        if (!data.status) throw new Error(data.errorText);

        setToken(token)

        yield put(
            loginSuccessAction({
                email: user.email,
                name: user.name,
                surname: user.surname,
                userId: user._id,
                token
            })
        )
    } catch (error) {

        yield put(loginFeildAction(error))
    }
}


function* workUserLogouth({ payload }) {
    removeToken();
    yield put(logouthAction());
}

function* workUserRegistration({ payload }) {

    yield put(registrationLoadingAction())

    try {
        // get registration datas

        const requestObject = {
            email: "someEmails@gmail.com",
            password: "xxassd",
            gender: 0,
            dateOfBirthday: "Sun Nov 10 2019 01:09:16 GMT-0800 (Pacific Standard Time)",
            surname: "Gharibyan",
            name: "Mher"

        }
        const res = yield call(Axios.post, apiPaths.registragion, requestObject);

        const data = res.data;
        if (data.status !== 200) throw new Object(data.error);

        yield put(registrationSuccessAction({
            status: 1
        }))


    } catch (error) {
        yield put(registrationFeildAction({ error }))
    }

}

export {
    watchUserLogin,
    watchUserLogouth,
    watchUserRegistration

}