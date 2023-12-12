// userReducer.js
const initialState = {
  currentUser: null,
  error: null,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        currentUser: action.user,
        error: null,
        isAuthenticated: true,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        currentUser: null,
        error: action.error,
        isAuthenticated: false,
      };
    case "LOGOUT":
      return {
        ...state,
        currentUser: null,
        error: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
