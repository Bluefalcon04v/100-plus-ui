import { CARD_CODE } from "../../../constants/constants";
import { Paperclip } from "lucide-react";
import React from "react";

interface IAvatarCard {
  type: "center-aligned" | "left-aligned" | "right-aligned";
  setOpenCopyCode: (state: boolean) => void;
  setCopyCodeType: (string: string) => void;
}

const AvatarCards = ({ type, setOpenCopyCode, setCopyCodeType }: IAvatarCard) => {
  const selectedCode =
    CARD_CODE.find((card) => card.type === type)?.code ?? "<div></div>";

  return (
    <div className="relative flex flex-col justify-center items-center gap-4 bg-white px-2 py-3 border rounded-lg w-full max-w-80 h-full">
      <button
        onClick={() => {
          setOpenCopyCode(true);
          setCopyCodeType(type);
        }}
        className="group top-2 right-2 absolute shadow shadow-black/40 active:shadow-inner p-2 rounded-full transition-all duration-500 ease-in-out cursor-pointer"
      >
        <Paperclip
          color="black"
          className="group-hover:stroke-gray-400 active:stroke-gray-700 transition-all cursor-pointer"
        />
      </button>

      {type === "center-aligned" && (
        <div dangerouslySetInnerHTML={{ __html: selectedCode }} />
      )}

      {type === "left-aligned" && (
        <div dangerouslySetInnerHTML={{ __html: selectedCode }} />
      )}
    </div>
  );
};

export default AvatarCards;
