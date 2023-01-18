import React from "react";

import { ButtonPrimary } from "../components/Button";
import { InputForm } from "../components/Input";
import { parsePath } from "react-router-dom";

import { LayoutSettings } from "../components/Layout";

function Signup() {
  return (
    <LayoutSettings>
      <h1 className="text-center text-3xl p-5">Sign Up</h1>
      <div className="mt-4">
        <h1>Username</h1>
        <InputForm placeholder="Username" />
      </div>
      <div className="mt-4">
        <h1>Full Name</h1>
        <InputForm placeholder="Full Name" />
      </div>
      <div className="mt-4">
        <h1>Email</h1>
        <InputForm placeholder="Email" />
      </div>
      <div className="mt-4">
        <h1>Passsword</h1>
        <InputForm placeholder="Password" type={"password"} />
      </div>
      <div className="mt-4">
        <h1>Confirm Passsword</h1>
        <InputForm placeholder="Confirm Password" type={"password"} />
      </div>
      <ButtonPrimary className="mt-8" label={"Sign Up"} />
    </LayoutSettings>
  );
}

export default Signup;
