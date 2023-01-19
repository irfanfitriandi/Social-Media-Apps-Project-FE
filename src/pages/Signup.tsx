import axios from "axios";
import React, { useEffect, useState } from "react";

import { Input, Form, Toggle, Button } from "react-daisyui";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary } from "../components/Button";

import { LayoutSettings } from "../components/Layout";

// interface eventSignupType {
//   username: string;
//   fullname: string;
//   email: string;
//   password: string;
// }

function Signup() {
  const [formSignup, setFormSignup] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(true);
  const [rePassword, setRePassword] = useState("");

  const handleChange = (event: any) => {
    setFormSignup({
      ...formSignup,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (
      formSignup.name === "" ||
      formSignup.username === "" ||
      formSignup.email === "" ||
      formSignup.password === ""
    ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
    console.log(formSignup);
  }, [formSignup]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (rePassword != formSignup.password) {
      alert("Password not match");
      return;
    }
    axios
      .post("https://shirayuki.site/register", formSignup)
      .then((response) => {
        console.log(response);

        alert("Success signup");
        navigate("/login");
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <LayoutSettings>
      <h1 className="text-center text-3xl p-5">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <h1>Username</h1>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={formSignup.username}
            className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
          />
        </div>
        <div className="mt-4">
          <h1>Full Name</h1>
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            value={formSignup.name}
            className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
          />
        </div>
        <div className="mt-4">
          <h1>Email</h1>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formSignup.email}
            className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
          />
        </div>
        <div className="mt-4">
          <h1>Passsword</h1>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formSignup.password}
            className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
          />
        </div>
        <div className="mt-4">
          <h1>Confirm Passsword</h1>
          <Input
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            onChange={(e) => setRePassword(e.target.value)}
            value={rePassword}
            className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
          />
        </div>
        <ButtonPrimary
          disabled={isDisable}
          className="mt-8"
          label={"Sign Up"}
        />
      </form>
    </LayoutSettings>
  );
}

export default Signup;
