import * as actionType from '../constants/actionTypes';

const templateReducer = (state = { toggleSidebar: true, toggleMode: false}, action) => {
  switch (action.type)
  {
    case actionType.TOOGLE_SIDEBAR:

        return { ...state, toggleSidebar: !state.toggleSidebar };
    
    case actionType.TOOGLE_DARK_MODE:

        return { ...state, toggleMode: !state.toggleMode };
      
    default:
        
      return state;
  }
};

export default templateReducer;