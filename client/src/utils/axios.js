import axios from "axios";

import store from "$store";
import { logouthAction } from "$store/actions/user";
import { getTokenWidthBearear } from "$utils/token";

axios.interceptors.request.use(
  config => {
    const newConfig = { ...config };
    newConfig.headers.authorization = getTokenWidthBearear();
    return newConfig;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { status } = error.response;

    if (status === 401) {
      store.dispatch(logouthAction());
    }
    return Promise.reject(error);
  }
);

export default axios;
