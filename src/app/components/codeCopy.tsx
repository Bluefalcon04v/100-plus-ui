import React from "react";
import { X } from "lucide-react";

interface IProps {
  setCloseCodeBtn: (state: boolean) => void;
}
const CodeCopy = ({ setCloseCodeBtn }: IProps) => {
  return (
    <div className="top-8 left-10 z-40 fixed bg-white/10 shadow-black shadow-inner backdrop-blur-[6rem] border border-white/20 border-t-neutral-600 rounded-md w-[95vw] h-[90vh]">
      <button
        onClick={() => setCloseCodeBtn(false)}
        className="top-2 right-2 absolute shadow-gray-50/10 shadow-inner hover:shadow-red-300/25 p-1 rounded-full hover:text-red-500 hover:scale-110 active:scale-75 transition-all cursor-pointer"
      >
        <X />
      </button>{" "}
      <div className="mt-4 p-4 text-white"></div>
    </div>
  );
};

export default CodeCopy;
