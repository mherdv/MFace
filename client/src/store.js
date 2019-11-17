import { createStore, applyMiddleware, compose } from "redux";
import reduxStore from "./store/index";

import setHeader from "./store/middlewares/setHeaderToken";
import createSagaMiddleware from "redux-saga";
import sagas from "$store/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reduxStore,
  compose(
    applyMiddleware(setHeader, sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(sagas);

// store.dispatch(loginUser({ email: 'mherdv@gmail.com', password: "123456" }))

// console.log(store.getState())

export default store;
