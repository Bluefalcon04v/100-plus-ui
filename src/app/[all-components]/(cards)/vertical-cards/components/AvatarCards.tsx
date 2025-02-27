import { Paperclip } from "lucide-react";
import React from "react";

interface IAvatarCard {
  type: "center-aligned" | "left-aligned" | "right-aligned";
  codeButton: boolean;
}

const AvatarCards = ({ type, codeButton }: IAvatarCard) => {
  if (type === "center-aligned")
    return (
      <div className="relative flex flex-col justify-center items-center gap-4 bg-white px-8 py-8 border rounded-lg w-full max-w-80 h-full">
        <button onClick={()=> codeButton}  className="top-2 right-2 absolute">
          <Paperclip color="black" className="hover:stroke-gray-400 active:stroke-gray-500 transition-all cursor-pointer"/>
        </button>
        <div className="bg-gray-500 rounded-full w-20 h-20" />
        <div className="text-black text-2xl">Headline</div>
        <p className="text-gray-500 text-center text-pretty">
          Please add your content here. Keep it short and simple. And smile :)
        </p>
      </div>
    );

};

export default AvatarCards;
