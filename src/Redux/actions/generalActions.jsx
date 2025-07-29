// src/Redux/actions/generalActions.jsx (or .js)

// Action Types
// export const SET_COLLAPSED = 'SET_COLLAPSED'; // Removed
export const SET_SHOW_ALGO_PAGE = 'SET_SHOW_ALGO_PAGE';
export const SET_MOBILE_MENU_OPEN = 'SET_MOBILE_MENU_OPEN'; // Keep if you still use mobileMenuOpen for Header or other elements

// Action Creators
// export const setCollapsed = (value) => ({ // Removed
//   type: SET_COLLAPSED,
//   payload: value,
// });

export const setShowAlgoPage = (value) => ({
  type: SET_SHOW_ALGO_PAGE,
  payload: value,
});

export const setMobileMenuOpen = (value) => ({ 
  type: SET_MOBILE_MENU_OPEN,
  payload: value,
});
