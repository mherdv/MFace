import axios from "axios";

import store from "$store";
import { logouthAction } from "$store/actions/user";

axios.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const { status } = error.response;

    if (status === 401) {
      store.dispatch(logouthAction());
    }
    return Promise.reject(error);
  }
);

export default axios;
