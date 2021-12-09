import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Registration = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Registraion Failewd");
      console.log("Registration Failewd");
    } else {
      window.alert("Registration Successfull");
      console.log("Registered Successfully");
      history.push("/signin");
    }
  };
  return (
    <>
      <div className="allbody">
        <form method="POST" id="register-form">
          <div>
            <label>Name:</label>
            <input
              placeholder="Enter your name"
              type="text"
              name="name"
              id="name"
              value={user.name}
              onChange={handleInput}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your Email"
              value={user.email}
              onChange={handleInput}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your Phone"
              value={user.phone}
              onChange={handleInput}
            />
          </div>

          <div>
            <label>Work:</label>
            <input
              type="text"
              name="work"
              id="work"
              placeholder="Enter your Skill"
              value={user.work}
              onChange={handleInput}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleInput}
            />
          </div>

          <div>
            <label>Confirm Password:</label>
            <input
              type="text"
              name="cpassword"
              id="cpassword"
              placeholder="Enter your password"
              value={user.cpassword}
              onChange={handleInput}
            />
          </div>
          <div>
            <button
              type="submit"
              name="register"
              id="register"
              value="register"
              onClick={postData}
            >
              Register
            </button>
          </div>

          <NavLink to="/signin">Already Registered</NavLink>
        </form>
      </div>
    </>
  );
};

export default Registration;
