import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginData = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid credentials");
    } else {
      window.alert("login successfully");
      history.push("/");
    }
  };

  return (
    <>
      <div className="allbody">
        <form method="POST">
          <div>
            <label>Email:</label>
            <input
              placeholder="Enter your Email"
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              placeholder="Enter your Password"
              type="text"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              name="signin"
              id="signin"
              value="signin"
              onClick={loginData}
            >
              Signin
            </button>
          </div>

          <NavLink to="/registration">Create an Account</NavLink>
        </form>
      </div>
    </>
  );
};

export default Signin;
