import React from "react";
import { AvatarCards } from "./components";

const Page = () => {
  return (
    <div className="w-full">
      <h1 className="flex w-full justify-center text-5xl font-roboto">
        Vertical Cards
      </h1>
      <div className="flex gap-4">
        <AvatarCards type="center-aligned" />
        <AvatarCards type="svg"/>
      </div>
    </div>
  );
};

export default Page;
