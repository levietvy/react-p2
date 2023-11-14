const initialState = {
  currentUser: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { currentUser: action.payload };
    case "LOGOUT":
      return { currentUser: null };
    default:
      return state;
  }
};

export default userReducer;
