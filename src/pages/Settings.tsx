import React from "react";

import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonAccent,
} from "../components/Button";
import { Input, Button } from "react-daisyui";
import { FaImages } from "react-icons/fa";
import { LayoutSettings } from "../components/Layout";

import { Link } from "react-router-dom";

function Settings() {
  return (
    <LayoutSettings>
      <h1 className="text-center text-3xl p-5">Settings</h1>
      <div className="mt-4">
        <h1>Username</h1>
        <Input
          placeholder="Dybala"
          className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <h1>Full Name</h1>
        <Input
          placeholder="Dybala Los Santos"
          className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <h1>Bio</h1>
        <Input
          placeholder="Toby Maguire's Twin"
          className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
      </div>
      <div className="mt-4">
        <h1>Email</h1>
        <Input
          placeholder="dybala@rocketmail.com"
          className="text-black bg-form border-2 border-secondary rounded-lg w-full mt-2"
        />
      </div>
      <div className="w-1/4 mt-4">
        <ButtonPrimary label={<FaImages className="text-xl" />} />
      </div>
      <div className="grid grid-cols-2 gap-3 mt-4">
        <Link to={"/profile/:id_user"}>
          <ButtonSecondary label="Cancel" />
        </Link>
        <ButtonPrimary label="Save" />
      </div>
      <ButtonAccent label="Delete Account" />
    </LayoutSettings>
  );
}

export default Settings;
