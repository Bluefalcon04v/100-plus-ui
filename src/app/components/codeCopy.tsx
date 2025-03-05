"use client";
import { CARD_CODE } from "../[all-components]/constants/constants";
import CopyToClipboard from "react-copy-to-clipboard";
import { Check, Copy, X } from "lucide-react";
import React, { useState } from "react";

interface IProps {
  setCloseCodeBtn: (state: boolean) => void;
  setCopyCodeType: string;
}

const CodeCopy = ({ setCloseCodeBtn, setCopyCodeType }: IProps) => {
  const [copied, setCopied] = useState(false);

  const selectedCode =
    CARD_CODE.find((card) => card.type === setCopyCodeType)?.code ?? "";

  return (
    <div className="top-8 left-10 z-40 fixed bg-white/10 shadow-black shadow-inner backdrop-blur-[6rem] border border-white/20 border-t-neutral-600 rounded-md w-[95vw] h-[90vh]">
      {/* ---------------------- close button -------------------------*/}
      <button
        onClick={() => setCloseCodeBtn(false)}
        className="top-2 right-2 absolute shadow-gray-50/10 shadow-inner hover:shadow-red-300/25 p-1 rounded-full hover:text-red-500 hover:scale-110 active:scale-75 transition-all cursor-pointer"
      >
        <X />
      </button>{" "}
      {/* -------------------- Code TextArea -------------------------*/}
      <div className="flex p-4 h-full text-white">
        <div className="relative flex justify-center items-center bg-black p-6 rounded-lg w-1/2 h-full">
          <pre className="overflow-auto text-sm whitespace-pre-wrap">
            {selectedCode}
          </pre>
          <CopyToClipboard
            text={selectedCode ?? ""}
            onCopy={() => setCopied(true)}
          >
            <button className="top-2 right-2 absolute flex items-center gap-1 bg-gray-200 hover:bg-gray-300 p-2 rounded-md text-gray-600 text-xs">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : "Copy Code"}
            </button>
          </CopyToClipboard>
        </div>
        <div className="flex justify-center items-center w-1/2 h-full">
          <div className="flex justify-center items-center w-full h-full">
            <div className="flex justify-center items-center w-1/2 h-full">
              <div dangerouslySetInnerHTML={{ __html: selectedCode }} />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default CodeCopy;
