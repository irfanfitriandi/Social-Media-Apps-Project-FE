import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input, Form, Toggle, Button } from "react-daisyui";

import { LayoutSettings } from "../components/Layout";
import { InputForm } from "../components/Input";
import { ButtonPrimary, ButtonSecondary } from "../components/Button";

function Login() {
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setFormLogin({
      ...formLogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(
        "https://virtserver.swaggerhub.com/icxz1/SosmedAPI/1.0.0/login",
        formLogin
      )
      .then((response) => {
        localStorage.setItem("token", response.data.data.token);
        console.log(response);
        console.log(formLogin);

        alert("Success Login");
        navigate("/");
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <LayoutSettings>
      <h1 className="text-center text-3xl p-5">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <h1>Username/Email</h1>
          <Input
            type="text"
            name="username"
            onChange={handleChange}
            value={formLogin.username}
            placeholder="Username/Email"
            className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
          />
        </div>
        <div className="mt-4">
          <h1>Passsword</h1>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={formLogin.password}
            placeholder="Passsword"
            className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
          />
        </div>
        {/* <Form className="mt-4">
          <Form.Label title="Remember me">
            <Toggle className="m-2" />
          </Form.Label>
        </Form> */}
        <ButtonPrimary label="Login" />
        <div className="mt-4 text-center">
          <p>Or</p>
        </div>
        <ButtonSecondary label="Sign Up" />
      </form>
    </LayoutSettings>
  );
}

export default Login;
