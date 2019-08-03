import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { reduxImmutableStateInvariant } from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  // add support for dev tools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose; // unique global var
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
