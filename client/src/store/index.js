import { combineReducers } from "redux";
import user from "./reducers/userReducer";
import registration from "./reducers/userRegistrationReducer";

export default combineReducers({
  user,
  registration
});
