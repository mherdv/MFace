import {
  SEARCH_USER_LOADING,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_ERROR,
  SEARCH_CLEAR_ACTION
} from "$store/types";

const initialState = {
  isLoading: false,
  errorText: "",
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_USER_LOADING:
      return { ...state, errorText: "", isLoading: true };

    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        errorText: "",
        users: action.payload,
        isLoading: false
      };
    case SEARCH_USER_ERROR:
      return {
        ...state,
        errorText: action.payload,
        users: [],
        isLoading: false
      };
    case SEARCH_CLEAR_ACTION:
      return initialState;
    default:
      return state;
  }
}
