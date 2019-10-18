import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import states from './redux/index';

import setHeader from './redux/middlewares/setHeaderToken';
import { loginUser } from './redux/actions/apis/user';


const store = createStore(states, applyMiddleware(setHeader, thunk));

store.dispatch(loginUser({ email: 'mherdv@gmail.com', password: "123456" }))

export default store;