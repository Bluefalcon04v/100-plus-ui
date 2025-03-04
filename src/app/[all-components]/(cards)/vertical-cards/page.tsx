"use client";
import React from "react";
import { AvatarCards } from "./components";

const Page = () => {
  return (
    <div className="w-full">
      <h1 className="flex justify-center w-full font-roboto text-5xl">
        Vertical Cards
      </h1>
      <AvatarCards type="center-aligned" />
    </div>
  );
};

export default Page;
