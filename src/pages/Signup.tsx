import React from "react";

import { Input, Form, Toggle, Button } from "react-daisyui";

import { LayoutLogin } from "../components/Layout";

function Signup() {
  return (
    <LayoutLogin>
      <h1 className="text-center text-3xl p-5">Sign Up</h1>
      <div className="mt-4">
        <h1>Username</h1>
        <Input
          placeholder="Username"
          className="bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <h1>Fullname</h1>
        <Input
          placeholder="Fullname"
          className="bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <h1>Email</h1>
        <Input
          placeholder="Email"
          className="bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <h1>Passsword</h1>
        <Input
          placeholder="Password"
          className="bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <h1>Confirm Passsword</h1>
        <Input
          placeholder="Confirm Password"
          className="bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
      </div>
      <Button className="w-full bg-primary text-white mt-8 hover:bg-accent">
        Sign up
      </Button>
    </LayoutLogin>
  );
}

export default Signup;
