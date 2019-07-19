import React from "react";

const User = props => {
  console.log(props);
  return (
    <div>
      <h3>{props.user.name}</h3>
    </div>
  );
};

export default User;
