import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import states from './redux/index';

const store = createStore(states, applyMiddleware(thunk));

export default store;