import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import RootReducer from "../reducers/";

// initiating redux logger
const loggerMiddleware = createLogger();

export default () => {
  return createStore(
    RootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
};
