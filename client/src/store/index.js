import user from './reducers/userReducer';
import registration from './reducers/userRegistrationReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    user,
    registration
})