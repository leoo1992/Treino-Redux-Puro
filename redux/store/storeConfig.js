import { alertMiddleware } from "../middlewares/alert.js";
import { thunk } from "../middlewares/thunk.js";
import { logMiddleware } from "../middlewares/log.js";
import aluno from "./reducers/aluno.js";
import aulas from "./reducers/aulas.js";
const { compose, applyMiddleware, createStore, combineReducers } = Redux;

const reducer = combineReducers({ aluno, aulas });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logMiddleware, alertMiddleware)
);

const store = createStore(reducer, enhancer);

export default store;
