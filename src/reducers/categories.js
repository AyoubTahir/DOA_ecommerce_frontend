import swal from "sweetalert"
import * as actionType from '../constants/actionTypes';

const categoriesReducer = (state = { categories: [], loading: false }, action) => {
  switch (action.type)
  {
    case actionType.CATEGORIES_REQUEST:

        return { ...state, loading: true};
      
    case actionType.CATEGORIES_SUCCESS:
          
        console.log(action.data)
          
        return { ...state, categories: action.data, loading: false, errors: null };
        
    case actionType.CATEGORIES_FAILURE:
        
        return { ...state, categories: [], loading: false, errors: action?.error?.response?.data };
    
    case actionType.ADD_CATEGORY_SUCCESS:
      
        swal("Good job!", action?.data?.message, "success")
          
        return { ...state, loading: false, errors: null };
        
    case actionType.ADD_CATEGORY_FAILURE:
        
        return { ...state, loading: false, errors: action?.error };
    
    default:
        
      return state;
  }
};

export default categoriesReducer;