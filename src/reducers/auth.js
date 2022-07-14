import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null, loading: false }, action) => {
  switch (action.type)
  {
    case actionType.AUTH_REQUEST:

        return { ...state, loading: true};
      
    case actionType.AUTH_SUCCESS:

        localStorage.setItem('auth_token', action?.data?.token)
        localStorage.setItem('auth_name', action?.data?.name)
          
        return { ...state, authData: action.data, loading: false, errors: null };
        
    case actionType.AUTH_FAILURE:
        
        return { ...state, authData: null, loading: false, errors: action?.error?.response?.data };
    
    case actionType.AUTH_LOGOUT:
        
        localStorage.clear();
        
        return { ...state, authData: null, loading: false, errors: null };
      
    case actionType.AUTH_TOKEN_CHECK:
        
        return { ...state, loading: false };
      
    default:
        
      return state;
  }
};

export default authReducer;