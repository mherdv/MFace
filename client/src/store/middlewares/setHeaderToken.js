// login heaader adding
const setHeader = store => next => action => {
  const { token } = store.getState().user;
  if (typeof action === "function") {
    next(action);
    return;
  }

  action.headers = {
    authorization: token
  };
  next(action);
};

export default setHeader;
