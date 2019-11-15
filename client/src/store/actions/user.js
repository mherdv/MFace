import {
    USER_LOGIN,
    USER_LOGOUTH,
    USER_LOGIN_LOADING,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FEILD,
    USER_REGISTRATION,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_FELID,
    USER_REGISTRATION_LOADING,
    CLEAR_REGISTRATION_STORE,
    USER_LOGOUTH_SUCCESS
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
function logouthSuccessAction() {
    return {
        type: USER_LOGOUTH_SUCCESS
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

function clearRegistrationStoreAction() {
    return {
        type: CLEAR_REGISTRATION_STORE
    }
}



export {
    loginAction,
    loginLoadingAction,
    loginSuccessAction,
    loginFeildAction,

    logouthAction,
    logouthSuccessAction,

    registrationAction,
    registrationSuccessAction,
    registrationFeildAction,
    registrationLoadingAction,
    clearRegistrationStoreAction


}