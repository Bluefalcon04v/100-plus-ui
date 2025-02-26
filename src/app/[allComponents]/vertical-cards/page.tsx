import React from "react";
import { AvatarCards } from "./components";

const Page = () => {
  return (
    <div className="w-full">
      <h1 className="flex w-full justify-center text-5xl font-roboto">
        Vertical Cards
      </h1>
      <div>
        <AvatarCards type="center-aligned" />
      </div>
    </div>
  );
};

export default Page;
