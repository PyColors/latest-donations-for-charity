import { combineReducers } from "redux";
import homePageReducer from "./homePageReducer";
import * as constantsActions from "../utils/constants_actions";

const appReducers = combineReducers({
  homePageReducer
});

const reducers = (state, action) => {
  if (action.type === constantsActions.CLEAR_STORE) {
    state = undefined;
  }

  return appReducers(state, action);
};

export default reducers;
