// import Image from "next/image";
// import React from "react";
// import { Image1 } from "../../../../../public/image";

// interface IAvatarCard {
//   type: "center-aligned" | "left-aligned" | "right-aligned" | "svg";
// }

// const AvatarCards = ({ type }: IAvatarCard) => {
//   if (type === "center-aligned")
//     return (
//       <div className="flex flex-col justify-center items-center gap-4 bg-white px-8 py-8 border rounded-lg w-full max-w-80 h-full">
//         <div className="bg-gray-500 rounded-full w-20 h-20" />
//         <div className="text-black text-2xl">Headline</div>
//         <p className="text-gray-500 text-center text-pretty">
//           Please add your content here. Keep it short and simple. And smile :)
//         </p>
//       </div>
//     );
//   if (type === "svg")
//     return (
//       <div className="relative bg-neutral-300 py-8 border-2 border-red-500 rounded-lg w-full max-w-80">
//         <div className="top-0 z-20 absolute flex shadow rounded-t-lg w-full overflow-clip text-black">
//           <div className="bg-white rounded-br-[80%] w-full h-12">asd</div>
//           <div className="-z-10 absolute bg-white rounded-full w-full h-4"></div>
//           <div className="flex justify-end bg-white pr-3 rounded-bl-full w-1/3 h-6">asd</div>
//         </div>
//         <Image src={Image1} alt="image" height={400} width={500} className="top-0 z-0 absolute w-full h-72" />
//         <div className="bottom-0 z-10 absolute bg-gradient-to-t from-40% from-black/50 to-transparent rounded-b-lg w-full h-20" />
//         <div className="bottom-3 z-20 absolute px-3">
//           <p>Title</p>
//           <p>desc</p>
//         </div>
//       </div>
//     );
// };

// export default AvatarCards;

"use client";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Check, Copy } from "lucide-react";

interface IAvatarCard {
  type?: "center-aligned" | "left-aligned" | "right-aligned";
}

const AvatarCardsWithCodePreview = ({ type }: IAvatarCard) => {
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
      {/* Code Preview Panel */}
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

      {/* Avatar Card Preview Panel */}
      <div className="flex justify-center items-center w-1/2">
        <div className="flex flex-col justify-center items-center gap-4 bg-white px-8 py-8 border rounded-lg w-full max-w-80 h-full">
          <div className="bg-gray rounded-full w-20 h-20" />
          <div className="text-black text-2xl">Headline</div>
          <p className="text-gray-400 text-center text-pretty">
            Please add your content here. Keep it short and simple. And smile :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default AvatarCardsWithCodePreview;
