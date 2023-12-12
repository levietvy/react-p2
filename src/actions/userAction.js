import { _getUsers } from "../utils/_DATA";

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const users = await _getUsers(); // Await the asynchronous call

      let user = null;
      user = await authenticatedUser(username, password, users);

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(loginSuccess(user));
      } else {
        dispatch(loginFailure("Wrong username or password"));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

const authenticatedUser = (username, password, users) => {
  for (const [userId, user] of Object.entries(users)) {
    if (user.id === username && user.password === password) {
      return user;
    }
  }
  return null;
};

export const loginSuccess = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  return { type: "LOGIN_SUCCESS", user };
};

export const loginFailure = (error) => {
  return {
    type: "LOGIN_FAILURE",
    error,
  };
};

export const logOut = () => {
  localStorage.removeItem("user");
  return {
    type: "LOGOUT",
  };
};
