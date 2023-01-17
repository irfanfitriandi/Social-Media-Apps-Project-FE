import React from "react";
import { IoMdHome, IoMdSearch, IoIosPerson } from "react-icons/io";

function Navbar() {
  return (
    <div className="max-w-4xl border-t-2 border-secondary fixed w-screen bottom-0 bg-black p-2">
      <div className="flex justify-around">
        <IoMdHome className="text-5xl text-primary" />
        <IoMdSearch className="text-5xl text-primary" />
        <IoIosPerson className="text-5xl text-primary" />
      </div>
    </div>
  );
}

export default Navbar;
