import { combineReducers } from "redux";

import auth from './auth';
import template from './template';
import categories from './categories';

export const reducers = combineReducers({
    auth,
    template,
    categories
});