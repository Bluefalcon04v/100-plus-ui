import React from "react";

interface IAvatarCard {
  type: "center-aligned" | "left-aligned" | "right-aligned" | 'svg';
}

const AvatarCards = ({ type }: IAvatarCard) => {
  if (type === "center-aligned")
    return (
      <div className="w-full h-full bg-white max-w-80 border px-8 flex-col gap-4 py-8 rounded-lg flex justify-center items-center">
        <div className="h-20 w-20 rounded-full bg-gray-500" />
        <div className="text-black text-2xl">Headline</div>
        <p className="text-gray-500 text-center text-pretty">
          Please add your content here. Keep it short and simple. And smile :){" "}
        </p>
      </div>
    );
    if (type === "svg")
      return (
        <div className="w-full h-72 bg-neutral-300 max-w-80 border py-8 rounded-lg relative">
          <div className="bg-red-700 w-full h-20 absolute top-0 rounded-t-lg">

          </div>
          <div className="absolute bg-gradient-to-t from-black from-30% to-transparent z-10 h-20 w-full  bottom-0 rounded-b-lg"/>
          <div className="absolute bottom-3 z-20 px-3">
            <p>Title</p>
            <p>desc</p>
          </div>
        </div>
      );
};

export default AvatarCards;

// "use client";
// import React, { useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import { Check, Copy } from "lucide-react";

// interface IAvatarCard {
//   type?: "center-aligned" | "left-aligned" | "right-aligned";
// }

// const AvatarCardsWithCodePreview = ({ type }: IAvatarCard) => {
//   const [copied, setCopied] = useState(false);

//   const cardCode = `
// <div className="w-full h-full bg-white max-w-80 border px-8 flex-col gap-4 py-8 rounded-lg flex justify-center items-center">
//   <div className="h-20 w-20 rounded-full bg-gray-400" />
//   <div className="text-black text-2xl font-semibold">Headline</div>
//   <p className="text-gray-400  text-center text-pretty">
//     Please add your content here. Keep it short and simple. And smile :)
//   </p>
// </div>`;

//   return (
//     <div className="flex gap-4">
//       {/* Code Preview Panel */}
//       <div className="w-1/2 bg-black p-4 rounded-lg relative">
//         <pre className="overflow-auto text-sm font-mono whitespace-pre-wrap">
//           {cardCode}
//         </pre>
//         <CopyToClipboard text={cardCode} onCopy={() => setCopied(true)}>
//           <button className="absolute top-2 right-2 bg-gray-200 p-2 rounded-md flex items-center gap-1 text-gray-600 hover:bg-gray-300">
//             {copied ? <Check size={16} /> : <Copy size={16} />}
//             {copied ? "Copied" : "Copy Code"}
//           </button>
//         </CopyToClipboard>
//       </div>

//       {/* Avatar Card Preview Panel */}
//       <div className="w-1/2 flex justify-center items-center">
//         <div className="w-full h-full bg-white max-w-80 border px-8 py-8 rounded-lg flex flex-col gap-4 justify-center items-center">
//           <div className="h-20 w-20 rounded-full bg-gray" />
//           <div className="text-black text-2xl">Headline</div>
//           <p className="text-gray-400 text-center text-pretty">
//             Please add your content here. Keep it short and simple. And smile :)
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AvatarCardsWithCodePreview;
