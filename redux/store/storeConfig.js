import aluno from "./reducers/aluno.js";
import aulas from "./reducers/aulas.js";
const { compose, applyMiddleware, createStore, combineReducers } = Redux;

const reducer = combineReducers({ aluno, aulas });

const logMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Action :", action);
  console.log("Prev_State :", store.getState());
  const result = next(action);
  console.log("New_State :", store.getState());

  console.groupEnd();
  return result;
};

const alertMiddleware = (_s) => (next) => (action) => {
  switch (action.type) {
    case "aluno/INCREMENTAR_TEMPO":
      alert("Acrescentou 1");
      break;
    case "aluno/REDUZIR_TEMPO":
      alert("Reduziu 1");
      break;
    default:
      break;
  }
  return next(action);
};

const thunk = ({dispatch, getState}) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  } else {
    return next(action);
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logMiddleware, alertMiddleware)
);

const store = createStore(reducer, enhancer);

export default store;
