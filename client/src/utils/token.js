import localStorageConstants from "$constants/localStorage";

function setToken(token) {
  window.localStorage.setItem(localStorageConstants.authHeaderKey, token);
}

function removeToken() {
  window.localStorage.removeItem(localStorageConstants.authHeaderKey);
}

function getToken() {
  return window.localStorage.getItem(localStorageConstants.authHeaderKey);
}

export { setToken, removeToken, getToken };
