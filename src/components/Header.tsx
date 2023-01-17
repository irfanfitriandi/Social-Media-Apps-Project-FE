import React from "react";

function Header() {
  return (
    <div className="flex justify-center p-2 border-b-2 border-secondary max-w-4xl w-full fixed top-0 bg-black">
      <img
        src="../src/assets/circle-logo.svg"
        alt="circle-logo"
        className="w-12"
      />
    </div>
  );
}

export default Header;