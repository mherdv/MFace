import { combineReducers } from "redux";
import user from "./reducers/userReducer";
import userSearch from "./reducers/userSearchReducer";
import registration from "./reducers/userRegistrationReducer";

export default combineReducers({
  user,
  registration,
  userSearch
});
