import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import reducers from "./reducers/reducers";

const logger = createLogger();
const initialState = {};

export default function configureStore() {
  let store;

  if (module.hot) {
    store = createStore(
      reducers,
      initialState,
      compose(
        applyMiddleware(thunk, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    );
  } else {
    store = createStore(
      reducers,
      initialState,
      compose(applyMiddleware(thunk), f => f)
    );
  }

  return store;
}
