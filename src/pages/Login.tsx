import React from "react";

import { Input, Form, Toggle, Button } from "react-daisyui";

import { LayoutLogin } from "../components/Layout";

function Login() {
  return (
    <LayoutLogin>
      <h1 className="text-center text-3xl p-5">Login</h1>
      <div className="mt-4">
        <h1>Username/Email</h1>
        <Input
          placeholder="Username/Email"
          className="bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <h1>Passsword</h1>
        <Input
          placeholder="Passsword"
          className="bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
      </div>
      <Form className="mt-4">
        <Form.Label title="Remember me">
          <Toggle className="m-2" />
        </Form.Label>
      </Form>
      <Button className="w-full bg-primary text-white mt-4 hover:bg-accent">
        Login
      </Button>
      <div className="mt-4 text-center">
        <p>Or</p>
      </div>
      <Button className="w-full bg-secondary text-white mt-4 hover:bg-zinc-800">
        Register
      </Button>
    </LayoutLogin>
  );
}

export default Login;
