import {
    USER_LOGIN, USER_LOGOUTH,
    USER_LOGIN_LOADING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FEILD,
    USER_REGISTRATION,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_FELID,
    USER_REGISTRATION_LOADING
} from "$store/types";


function loginAction({ email, password }) {
    return {
        type: USER_LOGIN,
        payload: { email, password }
    }
}

function loginLoadingAction() {
    return {
        type: USER_LOGIN_LOADING
    }
}

function loginSuccessAction(payload) {

    return {
        type: USER_LOGIN_SUCCESS,
        payload
    }
}

function logouthAction() {
    return {
        type: USER_LOGOUTH
    }
}

function loginFeildAction(payload) {
    return {
        type: USER_LOGIN_FEILD,
        payload: payload
    }
}


function registrationAction(payload) {
    return {
        type: USER_REGISTRATION,
        payload
    }
}

function registrationLoadingAction() {
    return {
        type: USER_REGISTRATION_LOADING
    }
}

function registrationSuccessAction(payload) {
    return {
        type: USER_REGISTRATION_SUCCESS,
        payload
    }
}

function registrationFeildAction(payload) {
    return {
        type: USER_REGISTRATION_FELID,
        payload: payload
    }
}


export {
    loginAction,
    loginLoadingAction,
    loginSuccessAction,
    loginFeildAction,

    logouthAction,

    registrationAction,
    registrationSuccessAction,
    registrationFeildAction,
    registrationLoadingAction


}