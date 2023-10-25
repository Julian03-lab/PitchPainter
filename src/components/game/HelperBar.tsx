import React from "react";
import HiddenWord from "./HiddenWord";
import TimeCounter from "./TimeCounter";

const HelperBar = () => {
  return (
    <div className="flex w-full justify-between bg-white py-2 px-4 rounded-xl items-center">
      <p className="text-black font-bold text-2xl">43 PTS</p>
      <HiddenWord />
      <div className="bg-gradient-to-r border from-green-500 via-green-600 to-green-700 p-1 rounded-full grid place-content-center text-base font-bold">
        <TimeCounter />
      </div>
    </div>
  );
};

export default HelperBar;
