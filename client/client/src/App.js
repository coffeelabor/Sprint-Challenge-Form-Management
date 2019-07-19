import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Login from "./components/Login";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <div>
        <Link to="/">Login</Link>
        <Link to="/user">Users</Link>
      </div>
      <Route exact path="/" component={Login} />
      <Route
        exact
        path="/user"
        render={props => {
          const token = localStorage.getItem("token");
          if (!token) {
            return <Redirect to="/" />;
          }
          return <UserList {...props} />;
        }}
      />
      {/* <Login />
      <UserList /> */}
    </div>
  );
}

export default App;
