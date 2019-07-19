import React, { useState, useEffect } from "react";
import User from "./User";
import Axios from "axios";

const UserList = ({ history }) => {
  const [users, setUsers] = useState([]);
  console.log("Users", users);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = "http://localhost:5000/api/restricted/data";
    if (token) {
      Axios.get(url, { headers: { Authorization: ` ${token}` } })
        .then(res => {
          console.log("Res inside .then .get", res);
          setUsers(res.data);
        })
        .catch(err => {
          console.log("catch error", err);
        });
    }
  }, [history]);

  return (
    <div>
      <h1>Check out this food</h1>
      {users.map(user => {
        return <User user={user} />;
      })}
    </div>
  );
};

export default UserList;
