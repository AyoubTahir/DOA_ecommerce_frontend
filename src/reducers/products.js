import * as actionType from "../constants/actionTypes";
import { successNotification } from "../helpers/swal";

const productsReducer = (
  state = {
    products: [],
    meta: {},
    product: { title: "", description: "", status: 1, photo: null },
    errors: null,
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case actionType.PRODUCTS_REQUEST:
      return { ...state, loading: true };

    case actionType.PRODUCT_SUCCESS:
      console.log(action?.data);
      successNotification(action?.data?.message);

      return { ...state, loading: false, errors: null };

    case actionType.PRODUCT_FAILURE:
      console.log(action?.error);
      return { ...state, loading: false, errors: action?.error };

    default:
      return state;
  }
};

export default productsReducer;
