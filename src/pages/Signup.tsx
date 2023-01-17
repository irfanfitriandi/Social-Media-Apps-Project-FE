import React from "react";

import { Input, Form, Toggle, Button } from "react-daisyui";
import { parsePath } from "react-router-dom";

import { LayoutSettings } from "../components/Layout";

function Signup() {
  return (
    <LayoutSettings>
      <h1 className="text-center text-3xl p-5">Sign Up</h1>
      <div className="mt-4">
        <h1>Username</h1>
        <Input
          placeholder="Username"
          className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <h1>Full Name</h1>
        <Input
          placeholder="Full Name"
          className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <h1>Email</h1>
        <Input
          placeholder="Email"
          className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <h1>Passsword</h1>
        <Input
          placeholder="Password"
          className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
          type={"password"}
        />
      </div>
      <div className="mt-4">
        <h1>Confirm Passsword</h1>
        <Input
          placeholder="Confirm Password"
          className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
          type={"password"}
        />
      </div>
      <Button className="w-full bg-primary text-white mt-8 hover:bg-accent">
        Sign up
      </Button>
    </LayoutSettings>
  );
}

export default Signup;
