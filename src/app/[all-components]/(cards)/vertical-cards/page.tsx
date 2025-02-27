'use client'
import React, { useState } from "react";
import { AvatarCards } from "./components";
import Link from "next/link";

const Page = () => {
  const [codeButton, setCodeButton] = useState()
  console.log(codeButton)
  return (
    <div className="w-full">
      <h1 className="flex justify-center w-full font-roboto text-5xl">
        Vertical Cards
      </h1>
      <Link href={} className="flex gap-4">
        <AvatarCards type="center-aligned" codeButton={setCodeButton}/>
      </Link>
    </div>
  );
};

export default Page;
