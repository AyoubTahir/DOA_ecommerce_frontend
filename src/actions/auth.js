import {
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOGOUT,
  AUTH_TOKEN_CHECK,
} from '../constants/actionTypes';
import * as api from '../apis';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REQUEST });

    await api.csrfCookie();

    const { data } = await api.login(formData);

    dispatch({ type: AUTH_SUCCESS, data });

    navigate('/admin');
  } catch (error) {
    dispatch({ type: AUTH_FAILURE, error });

    console.log(error);
  }
};

export const logout = (navigate) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REQUEST });

    await api.logout();

    dispatch({ type: AUTH_LOGOUT });

    navigate('/admin/login');
  } catch (error) {
    dispatch({ type: AUTH_FAILURE, error });

    console.log(error);
  }
};

export const checkToken = (navigate) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REQUEST });

    const { data } = await api.checkToken();

    console.log(data);

    dispatch({ type: AUTH_TOKEN_CHECK });
  } catch (error) {
    dispatch({ type: AUTH_LOGOUT });

    navigate('/admin/login');

    console.log(error);
  }
};
