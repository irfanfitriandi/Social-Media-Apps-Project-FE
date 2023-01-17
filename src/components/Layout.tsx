import React, { FC } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-4xl bg-black w-full h-screen overflow-auto">
      <Header />
      <div className="py-16">{children}</div>
      <Navbar />
    </div>
  );
};

export const LayoutLogin: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-4xl bg-black w-full h-screen overflow-auto flex flex-col justify-between">
      <div className="px-5 mb-8">{children}</div>
      <p className="text-center mb-5">©2023 Circle</p>
    </div>
  );
};

export const LayoutProfile: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto max-w-4xl bg-black w-full h-screen overflow-auto">
      <div className="pb-16">{children}</div>
      <Navbar />
    </div>
  );
};
