import localStorageConstants from "$constants/localStorage";

function setToken(token) {
  window.localStorage.setItem(
    localStorageConstants.authHeaderKey,
    `Bearear ${token}`
  );
}

function removeToken() {
  window.localStorage.removeItem(localStorageConstants.authHeaderKey);
}

function getTokenWidthBearear() {
  return window.localStorage.getItem(localStorageConstants.authHeaderKey);
}
function getToken() {
  const BearearToken = getTokenWidthBearear();
  return BearearToken && BearearToken.split(" ")[1];
}

export { setToken, removeToken, getToken, getTokenWidthBearear };
