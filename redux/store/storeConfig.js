import { alertMiddleware } from "../middlewares/alert.js";
import { thunk } from "../middlewares/thunk.js";
import { logMiddleware } from "../middlewares/log.js";
import { localStorageMiddleware } from "../middlewares/localStorage.js";
import aluno from "./reducers/aluno.js";
import aulas from "./reducers/aulas.js";
import token from "./reducers/token.js";

const { compose, applyMiddleware, createStore, combineReducers } = Redux;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk, logMiddleware, alertMiddleware, localStorageMiddleware)
);
const reducer = combineReducers({ aluno, aulas, token });
const store = createStore(reducer, enhancer);

export default store;
