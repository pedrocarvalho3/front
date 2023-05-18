import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import products from "./products";

import user from "./user";

export default combineReducers({
  products,
  user,
  form: formReducer,
});
