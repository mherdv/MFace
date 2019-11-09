import { USER_LOGOUTH, USER_LOGIN_FEILD, USER_LOGIN_LOADING, USER_LOGIN_SUCCESS } from '$store/types';
import jwt_decode from 'jwt-decode';

const userToken = localStorage.getItem('userToken');

const initialState = {

    isLoading: false,
    userId: '',
    email: '',
    name: '',
    token: userToken,
}

if (userToken) {
    const encodedJwt = jwt_decode(userToken);
    initialState.userId = encodedJwt.userId
    initialState.email = encodedJwt.email
    initialState.name = encodedJwt.name
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN_LOADING:

            return { ...state, isLoading: true };
        case USER_LOGIN_SUCCESS:

            return { isLoading: false, ...action.payload };
        case USER_LOGIN_FEILD:
            return { isLoading: false, loginError: action.payload };
        case USER_LOGOUTH:
            return {
                userId: '',
                email: '',
                name: '',
                token: userToken,
            };
        default:
            return state;
    }
}