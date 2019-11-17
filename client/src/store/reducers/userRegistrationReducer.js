import {
  USER_REGISTRATION_LOADING,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FELID,
  CLEAR_REGISTRATION_STORE
} from "$store/types";

const initialState = {
  status: null,
  loading: false,
  errorText: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTRATION_LOADING:
      return { ...state, loading: true, errorText: "" };
    case USER_REGISTRATION_SUCCESS:
      return { ...state, loading: false, status: 1, errorText: "" };
    case USER_REGISTRATION_FELID:
      return { ...state, loading: false, status: 0, errorText: action.payload };
    case CLEAR_REGISTRATION_STORE:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
