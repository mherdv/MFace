import { getTokenWidthBearear } from "$utils/token";

// login heaader adding
const setHeader = store => next => action => {
  const token = getTokenWidthBearear();
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
