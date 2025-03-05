"use client";
import CodeCopy from "../../../components/codeCopy";
import { AvatarCards } from "./components";
import React, { useState } from "react";

const Page = () => {
  const [copyCode, setCopyCode] = useState<boolean>(false);
  const [copyCodeType, setCopyCodeType] = useState<string>("");
  return (
    <div className="w-full">
      <h1 className="flex justify-center w-full font-roboto text-5xl tracking-wider">
        Vertical Cards
      </h1>
      <div className="flex flex-wrap gap-8 mt-8 w-full">
      <AvatarCards
        type="center-aligned"
        setOpenCopyCode={setCopyCode}
        setCopyCodeType={setCopyCodeType}
      />
      <AvatarCards
        type="left-aligned"
        setOpenCopyCode={setCopyCode}
        setCopyCodeType={setCopyCodeType}
      />
      </div>
      {copyCode && (
        <CodeCopy setCloseCodeBtn={setCopyCode} setCopyCodeType={copyCodeType} />
      )}
    </div>
  );
};

export default Page;
