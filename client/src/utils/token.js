import localStorageConstants from "$constants/localStorage";

function setToken(token) {
  window.localStorage.setItem(
    localStorageConstants.authHeaderKey,
    "Bearear " + token
  );
}

function removeToken() {
  window.localStorage.removeItem(localStorageConstants.authHeaderKey);
}

function getToken() {
  let BearearToken = getTokenWidthBearear();
  return BearearToken && BearearToken.split(" ")[1];
}

function getTokenWidthBearear() {
  return window.localStorage.getItem(localStorageConstants.authHeaderKey);
}

export { setToken, removeToken, getToken, getTokenWidthBearear };
