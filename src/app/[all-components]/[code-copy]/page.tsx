"use client";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

const Page = () => {
  const [copied, setCopied] = useState(false);

  const cardCode = `
    <div className="flex flex-col justify-center items-center gap-4 bg-white px-8 py-8 border rounded-lg w-full max-w-80 h-full">
      <div className="bg-gray-400 rounded-full w-20 h-20" />
      <div className="font-semibold text-black text-2xl">Headline</div>
      <p className="text-gray-400 text-center text-pretty">
        Please add your content here. Keep it short and simple. And smile :)
      </p>
    </div>`;

  return (
    <div className="flex gap-4">
      <div className="relative bg-black p-4 rounded-lg w-1/2">
        <pre className="overflow-auto font-mono text-sm whitespace-pre-wrap">
          {cardCode}
        </pre>
        <CopyToClipboard text={cardCode} onCopy={() => setCopied(true)}>
          <button className="top-2 right-2 absolute flex items-center gap-1 bg-gray-200 hover:bg-gray-300 p-2 rounded-md text-gray-600">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy Code"}
          </button>
        </CopyToClipboard>
      </div>

      <div className="flex justify-center items-center w-1/2">
        <div className="flex flex-col justify-center items-center gap-4 bg-white px-8 py-8 border rounded-lg w-full max-w-80 h-full">
          <div className="bg-gray-500 rounded-full w-20 h-20" />
          <div className="text-black text-2xl">Headline</div>
          <p className="text-gray-400 text-center text-pretty">
            Please add your content here. Keep it short and simple. And smile :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
