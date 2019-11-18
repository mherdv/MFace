import jwtDecode from "jwt-decode";
import {
  USER_LOGIN_FEILD,
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGOUTH_SUCCESS
} from "$store/types";
import { removeToken } from "$utils/token";
import { getToken } from "$utils/token";

const userToken = getToken();

const initialState = {
  isLoading: false,
  userId: "",
  email: "",
  name: "",
  token: userToken,
  errorText: ""
};

if (userToken) {
  const { exp, id, email, name } = jwtDecode(userToken);
  const now = new Date();
  const finalDate = exp * 1000;

  if (now > finalDate) {
    initialState.token = null;
    removeToken();
  } else {
    initialState.userId = id;
    initialState.email = email;
    initialState.name = name;
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_LOADING:
      return { ...state, isLoading: true, errorText: "" };
    case USER_LOGIN_SUCCESS:
      return { isLoading: false, ...action.payload };
    case USER_LOGIN_FEILD:
      return { isLoading: false, errorText: action.payload };
    case USER_LOGOUTH_SUCCESS:
      return {
        isLoading: false,
        userId: "",
        email: "",
        name: "",
        token: null,
        errorText: ""
      };

    default:
      return state;
  }
}
