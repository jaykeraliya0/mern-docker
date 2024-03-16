import React, { useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { userContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(userContext);

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Details");
    } else {
      dispatch({ type: "USER", payload: true });
      // window.alert("Login Successful");
      history.push("/");
    }
  };

  return (
    <>
      <div className="center">
        <div className="form-signin">
          <form method="POST">
            <h1 className="h1 text-center mb-4">Login</h1>

            <div className="form-floating">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                className="form-control"
              />
              <label for="email">Email address</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                className="form-control"
              />
              <label for="password">Password</label>
            </div>

            <input
              className="mt-3 w-100 btn btn-lg btn-outline-primary"
              type="submit"
              name="signin"
              id="signin"
              value="Login"
              onClick={loginUser}
            />
            <NavLink to="/signup" className="mt-5">
              Not have an account? Signup here
            </NavLink>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
