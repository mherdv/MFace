import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reduxStore from "./store/index";
import sagas from "$store/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reduxStore,
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(sagas);

export default store;
