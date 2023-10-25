import React from "react";
import HiddenWord from "./HiddenWord";

const HelperBar = () => {
  return (
    <div className="flex w-full justify-between bg-white py-2 px-4 rounded-xl items-center">
      <p className="text-black font-bold text-2xl">43 PTS</p>
      <HiddenWord />
      <div className="bg-gradient-to-r border from-green-500 via-green-600 to-green-700 p-1 rounded-full grid place-content-center text-base font-bold">
        <div className="bg-white rounded-full w-9 h-9 grid place-content-center ">
          <p className="text-base font-bold text-black">35</p>
        </div>
      </div>
    </div>
  );
};

export default HelperBar;
