import axios from "axios";

const APIRequest = async ({ path, method, body, callback, headers }) => {
  if (APIRequest.headers) {
    for (const key in APIRequest.headers) {
      headers[key] = APIRequest.headers[key];
    }
  }

  // console.log(APIRequest.headers)
  await axios[method](path, body, headers || {}).then(callback);
};

export default APIRequest;
