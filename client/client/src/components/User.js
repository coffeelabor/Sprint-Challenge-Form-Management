import React from "react";

const User = props => {
  console.log(props);
  return (
    <div>
      <hr />
      <h3>{props.user.name}</h3>
      <p>{props.user.course}</p>
      <p>{props.user.technique}</p>
      <hr />
    </div>
  );
};

export default User;
