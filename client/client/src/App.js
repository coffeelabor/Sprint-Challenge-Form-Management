import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Login from "./components/Login";
import UserList from "./components/UserList";
import { useToken } from "./hooks/useToken";
import "./App.css";

function App() {
  const [, , setToken] = useToken("token");
  return (
    <div className="App">
      <h1>hello</h1>
      <div>
        <Link to="/">Login</Link>
        <Link to="/user">Users</Link>
      </div>
      <Route
        exact
        path="/"
        render={props => <Login {...props} setToken={setToken} />}
      />
      {/* <Route exact path="/" render={props=><Login />} component={Login} setToken={setToken} /> */}
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

// 5D41402ABC4B2A76B9719D911017C592 BB21EC8394B75795622F61613A777A8B
//  5D41402ABC4B2A76B9719D911017C592

// $2y$12$ZFT3BLLDGmlG / eUbaE53HeDa6EMD / 9YCpGizuie1HNelm4OQAWeCq

// $2y$12$29sN5CNxULnChLoep2UfQ.LBzdi.XPTUtsqW0iDwWF0Yaf9OozDj.
