import { CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE } from '../constants/actionTypes';
import * as api from '../apis'

export const categories = () => async (dispatch) => {
  try
  {
    
    dispatch({ type: CATEGORIES_REQUEST})
    
    const { data } = await api.categories()
    
    dispatch({ type: CATEGORIES_SUCCESS, data: data.categories })
      
  }
  catch (error)
  {
    dispatch({ type: CATEGORIES_FAILURE, error })
    
    console.log(error)
  }
}