import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reduxStore from "./store/index";

import setHeader from "./store/middlewares/setHeaderToken";
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

export default store;
