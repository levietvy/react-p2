import React from "react";
import { useSelector } from "react-redux";

const UserInfoComponent = () => {
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <div>
      {currentUser ? (
        <div>
          <h2>Welcome, {currentUser}!</h2>
        </div>
      ) : (
        <p>Please log in to view user information.</p>
      )}
    </div>
  );
};

export default UserInfoComponent;
