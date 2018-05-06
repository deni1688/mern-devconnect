import { combineReducers } from "redux";
import authReducer from "./authReducer" ;
import errorsReducer from "./errorsReducer" ;

/**
 * This is a root reducer that combines
 * and exports all the reducers used in
 * in the project
 */
export default combineReducers({
  auth: authReducer,
  errors: errorsReducer
});