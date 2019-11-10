import {
    USER_REGISTRATION_LOADING,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_FELID
} from "$store/types";

const initialState = {
    status: null,
    loading: false
};


export default function (state = initialState, action) {
    switch (action.type) {
        case USER_REGISTRATION_LOADING:

            return { ...state, loading: true };
        case USER_REGISTRATION_SUCCESS:

            return { ...state, loading: false, status: 1 };
        case USER_REGISTRATION_FELID:

            return { ...state, loading: false, status: 0 };

        default:
            return state;
    }
}