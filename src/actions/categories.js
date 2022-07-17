import * as actionType from '../constants/actionTypes';
import * as api from '../apis';

export const categories =
  (paginate = null) =>
  async (dispatch) => {
    try {
      dispatch({ type: actionType.CATEGORIES_REQUEST });

      if (paginate) {
        const { data } = await api.paginatedCategories(paginate);

        dispatch({
          type: actionType.CATEGORIES_SUCCESS,
          data: data.data.categories,
          meta: data.meta,
        });
      } else {
        const { data } = await api.categories();

        dispatch({
          type: actionType.CATEGORIES_SUCCESS,
          data: data.data.categories,
          meta: data.meta,
        });
      }
    } catch (error) {
      dispatch({ type: actionType.CATEGORIES_FAILURE, error });

      console.log(error);
    }
  };

export const addCategory = (inputs, navigate) => async (dispatch) => {
  try {
    dispatch({ type: actionType.CATEGORIES_REQUEST });

    const formData = new FormData();

    formData.append('title', inputs.title);
    formData.append('description', inputs.description);
    formData.append('status', inputs.status);
    formData.append('photo', inputs.photo);

    const { data } = await api.addCategory(formData);

    dispatch({ type: actionType.CATEGORY_SUCCESS, data });

    navigate('/admin/categories');
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
