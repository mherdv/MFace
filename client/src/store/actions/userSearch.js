import {
  SEARCH_USER,
  SEARCH_USER_LOADING,
  SEARCH_USER_ERROR,
  SEARCH_USER_SUCCESS,
  SEARCH_CLEAR_ACTION
} from "$store/types";

function userSearchAction(payload) {
  return {
    type: SEARCH_USER,
    payload
  };
}

function userSearchLoadingAction() {
  return {
    type: SEARCH_USER_LOADING
  };
}

function userSearchErrorAction(payload) {
  return {
    type: SEARCH_USER_ERROR,
    payload
  };
}

function userSearchSuccessAction(payload) {
  return {
    type: SEARCH_USER_SUCCESS,
    payload
  };
}

function userSearchClearAction() {
  return {
    type: SEARCH_CLEAR_ACTION
  };
}

export {
  userSearchAction,
  userSearchLoadingAction,
  userSearchErrorAction,
  userSearchSuccessAction,
  userSearchClearAction
};
