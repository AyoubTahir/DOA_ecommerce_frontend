import * as actionType from "../constants/actionTypes";
import { successNotification } from "../helpers/swal";

const categoriesReducer = (
  state = {
    categories: [],
    meta: {},
    category: { title: "", description: "", status: 1, photo: null },
    errors: null,
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case actionType.CATEGORIES_REQUEST:
      return { ...state, loading: true };

    case actionType.CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.data,
        meta: action.meta,
        loading: false,
        errors: null,
      };

    case actionType.CATEGORIES_FAILURE:
      return {
        ...state,
        categories: [],
        loading: false,
        errors: action?.error?.response?.data,
      };

    case actionType.CATEGORY_SUCCESS:
      successNotification(action?.data?.message);

      return { ...state, loading: false, errors: null };

    case actionType.CATEGORY_FAILURE:
      return { ...state, loading: false, errors: action?.error };

    case actionType.SHOW_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.data,
        loading: false,
        errors: null,
      };

    case actionType.SHOW_CATEGORY_FAILURE:
      return {
        ...state,
        category: {},
        loading: false,
        errors: action?.error,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
