// App.js
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import userReducer from "./reducers/userReducer";
import LoginComponent from "./components/LoginComponent";
import LogoutComponent from "./components/LogoutComponent";
import UserInfoComponent from "./components/UserInfoComponent";

const store = createStore(userReducer);

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Redux Login Example</h1>
      <LoginComponent />
      <LogoutComponent />
      <UserInfoComponent />
    </div>
  </Provider>
);

export default App;
