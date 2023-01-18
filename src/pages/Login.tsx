import React from "react";

import { ButtonPrimary, ButtonSecondary } from "../components/Button";
import { Input, Form, Toggle } from "react-daisyui";
import { LayoutSettings } from "../components/Layout";

import { Link } from "react-router-dom";

function Login() {
  return (
    <LayoutSettings>
      <h1 className="text-center text-3xl p-5">Login</h1>
      <div className="mt-4">
        <h1>Username/Email</h1>
        <Input
          placeholder="Username/Email"
          className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <h1>Passsword</h1>
        <Input
          placeholder="Passsword"
          className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
          type={"password"}
        />
      </div>
      <Form className="mt-4">
        <Form.Label title="Remember me">
          <Toggle className="m-2" />
        </Form.Label>
      </Form>
      <ButtonPrimary label="Login" />
      <div className="mt-4 text-center">
        <p>Or</p>
      </div>
      <ButtonSecondary label="Sign Up" />
    </LayoutSettings>
  );
}

export default Login;
