import { combineReducers } from "redux";

import auth from './auth';
import template from './template';

export const reducers = combineReducers({
    auth,
    template
});