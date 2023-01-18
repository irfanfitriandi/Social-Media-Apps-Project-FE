import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonAccent,
} from "../components/Button";
import { InputForm } from "../components/Input";
import { FaImages } from "react-icons/fa";
import { LayoutSettings } from "../components/Layout";

import { Link } from "react-router-dom";

function Settings() {
  return (
    <LayoutSettings>
      <h1 className="text-center text-3xl p-5">Settings</h1>
      <div className="mt-4">
        <h1>Username</h1>
        <InputForm placeholder="Dybala" />
      </div>
      <div className="mt-4">
        <h1>Full Name</h1>
        <InputForm placeholder="Dybala Los Santos" />
      </div>
      <div className="mt-4">
        <h1>Bio</h1>
        <InputForm placeholder="Toby Maguire's Twin" />
      </div>
      <div className="mt-4">
        <h1>Email</h1>
        <InputForm placeholder="dybala@rocketmail.com" />
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
