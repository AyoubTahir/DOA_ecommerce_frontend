import * as actionType from "../constants/actionTypes";
import * as api from "../apis";

export const categories =
  (page, record, search, signal) => async (dispatch) => {
    try {
      dispatch({ type: actionType.CATEGORIES_REQUEST });

      const { data } = await api.categories(page, record, search, signal);

      dispatch({
        type: actionType.CATEGORIES_SUCCESS,
        data: data.data.categories,
        meta: data.meta,
      });
    } catch (error) {
      dispatch({ type: actionType.CATEGORIES_FAILURE, error });

      console.log(error);
    }
  };

export const addCategory = (inputs, navigate) => async (dispatch) => {
  try {
    dispatch({ type: actionType.CATEGORIES_REQUEST });

    const formData = new FormData();

    formData.append("title", inputs.title);
    formData.append("description", inputs.description);
    formData.append("status", inputs.status);
    formData.append("photo", inputs.photo);

    const { data } = await api.addCategory(formData);

    dispatch({ type: actionType.CATEGORY_SUCCESS, data });

    navigate("/admin/categories");
  } catch (error) {
    dispatch({
      type: actionType.CATEGORY_FAILURE,
      error: error?.response?.data,
    });

    console.log(error);
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.CATEGORIES_REQUEST });

    const { data } = await api.deleteCategory(id);

    dispatch({ type: actionType.CATEGORY_SUCCESS, data });
  } catch (error) {
    dispatch({
      type: actionType.CATEGORY_FAILURE,
      error: error?.response?.data,
    });

    console.log(error);
  }
};

export const showCategoy = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.CATEGORIES_REQUEST });

    const { data } = await api.showCategory(id);

    dispatch({
      type: actionType.SHOW_CATEGORY_SUCCESS,
      data: data.category,
    });
  } catch (error) {
    dispatch({
      type: actionType.CATEGORY_FAILURE,
      error: error?.response?.data,
    });

    console.log(error);
  }
};

export const updateCategory = (inputs, id, navigate) => async (dispatch) => {
  try {
    dispatch({ type: actionType.CATEGORIES_REQUEST });

    const formData = new FormData();

    formData.append("title", inputs.title);
    formData.append("description", inputs.description);
    formData.append("status", inputs.status);
    if (inputs.photo) formData.append("photo", inputs.photo);

    const { data } = await api.updateCategory(formData, id);

    dispatch({ type: actionType.CATEGORY_SUCCESS, data });

    navigate("/admin/categories");
  } catch (error) {
    dispatch({
      type: actionType.CATEGORY_FAILURE,
      error: error?.response?.data,
    });

    console.log(error);
  }
};
