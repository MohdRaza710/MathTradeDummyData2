// src/Redux/reducers/generalReducer.jsx (or .js)

import { SET_SHOW_ALGO_PAGE, SET_MOBILE_MENU_OPEN } from '../actions/generalActions'; // SET_COLLAPSED removed

const initialState = {
  // inlineCollapsed removed
  showPage: 'defaultPage', 
  mobileMenuOpen: false,  // Keep if you still use mobileMenuOpen for Header or other elements
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_COLLAPSED: // Removed
    //   return {
    //     ...state,
    //     inlineCollapsed: action.payload,
    //   };
    case SET_SHOW_ALGO_PAGE:
      return {
        ...state,
        showPage: action.payload,
      };
    case SET_MOBILE_MENU_OPEN: 
      return {
        ...state,
        mobileMenuOpen: action.payload,
      };
    default:
      return state;
  }
};

export default generalReducer;
