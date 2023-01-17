import React from "react";

import { Input, Form, Toggle, Button } from "react-daisyui";

import { LayoutSettings } from "../components/Layout";

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
      <Button className="w-full bg-primary text-white mt-4 hover:bg-accent">
        Login
      </Button>
      <div className="mt-4 text-center">
        <p>Or</p>
      </div>
      <Button className="w-full bg-secondary text-white mt-4 hover:bg-zinc-800">
        Register
      </Button>
    </LayoutSettings>
  );
}

export default Login;
