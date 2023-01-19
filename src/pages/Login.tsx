import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Input, Form, Toggle, Button } from "react-daisyui";

import { LayoutSettings } from "../components/Layout";
import { InputForm } from "../components/Input";
import { ButtonPrimary, ButtonSecondary } from "../components/Button";
import { useCookies } from "react-cookie";

function Login() {
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(true);

  const handleChange = (event: any) => {
    setFormLogin({
      ...formLogin,
      [event.target.name]: event.target.value,
    });
  };

  const [cookies, setCookie, removeCookie] = useCookies([
    "token",
    "id_user",
    "username",
  ]);

  useEffect(() => {
    if (formLogin.username === "" || formLogin.password === "") {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [formLogin]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .postForm("https://shirayuki.site/login", formLogin)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setCookie("token", response.data.token);
        setCookie("id_user", response.data.data.id);
        setCookie("username", response.data.data.username);
        console.log(response.data, "aaa");
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
        <ButtonPrimary disabled={isDisable} label="Login" />
        <div className="mt-4 text-center">
          <p>Or</p>
        </div>
        <ButtonSecondary label="Sign Up" />
      </form>
    </LayoutSettings>
  );
}

export default Login;
