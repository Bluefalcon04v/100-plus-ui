import React from "react";

interface IAvatarCard {
  type: "center-aligned" | "left-aligned" | "right-aligned";
}

const AvatarCards = ({ type }: IAvatarCard) => {
  if (type === "center-aligned")
    return (
      <div className="w-full h-full bg-white max-w-80 border px-8 flex-col gap-4 py-8 rounded-lg flex justify-center items-center">
        <div className="h-20 w-20 rounded-full bg-gray" />
        <div className="text-black text-2xl">Headline</div>
        <p className="text-gray text-center text-pretty">
          Please add your content here. Keep it short and simple. And smile :){" "}
        </p>
      </div>
    );
};

export default AvatarCards;
