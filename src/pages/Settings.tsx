import React from "react";

import { Input, Button } from "react-daisyui";
import { FaImages } from "react-icons/fa";
import { LayoutSettings } from "../components/Layout";

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
      <div className="flex justify-end mt-4">
        <Button className="bg-primary text-white w-20">
          <FaImages />
        </Button>
      </div>
      <div className="flex gap-3 mx-1 justify-around mt-4">
        <Button className="w-1/2 bg-secondary text-white hover:bg-zinc-800">
          Cancel
        </Button>
        <Button className="w-1/2 bg-primary text-white  hover:bg-accent">
          Save
        </Button>
      </div>
      <Button className="w-full mt-4 text-white bg-accent">
        Delete Account
      </Button>
    </LayoutSettings>
  );
}

export default Settings;
