import { combineReducers } from "redux";
import post from "./postReducers";

const rootReducer = combineReducers({
  post
});

export default rootReducer;
