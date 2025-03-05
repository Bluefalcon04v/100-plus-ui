"use client";
import React, { useState } from "react";
import { AvatarCards } from "./components";
import CodeCopy from "../../../components/codeCopy";

const Page = () => {
  const [copyCode, setCopyCode] = useState<boolean>(false);
  console.log(copyCode)
  return (
    <div className="w-full">
      <h1 className="flex justify-center w-full font-roboto text-5xl">
        Vertical Cards
      </h1>
      <AvatarCards type="center-aligned" setOpenCopyCode={setCopyCode}/>

      {copyCode && <CodeCopy setCloseCodeBtn={setCopyCode} />}
    </div>
  );
};

export default Page;
