import { createStore, applyMiddleware, compose } from 'redux';
import reduxStore from './store/index';

import setHeader from './store/middlewares/setHeaderToken';
import createSagaMiddleware from 'redux-saga';
// import { loginUser } from './store/actions/apis/user';
import sagas from '$store/sagas'
import { USER_LOGIN } from './store/types';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reduxStore,
    compose(
        applyMiddleware(setHeader, sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )

);

sagaMiddleware.run(sagas);


store.dispatch({ type: USER_LOGIN, payload: { email: 'mherdv@gmail.com', password: "123456" } })

// store.dispatch(loginUser({ email: 'mherdv@gmail.com', password: "123456" }))

// console.log(store.getState())


export default store;