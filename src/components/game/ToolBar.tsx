import { TrashIcons } from "@/utils/Icons";
import { useDrawColorStore } from "@/utils/idea-generation";
import React, { Dispatch, SetStateAction } from "react";

const colors = [
  "#000",
  "#f00",
  "#0f0",
  "#00f",
  "#ff0",
  "#0ff",
  "#f0f",
  "#fff",
  "#f80",
  "#08f",
  "#8f0",
  "#80f",
  "#f08",
  "#0f8",
  "#8f08f0",
  "#f80f80",
];

const ToolBar = ({
  buttonRef,
}: {
  buttonRef: React.RefObject<HTMLButtonElement>;
}) => {
  const { setDrawColor } = useDrawColorStore();
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2 flex-wrap">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => setDrawColor(color)}
            className="w-7 h-7 border border-gray-400"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <button ref={buttonRef}>
        <TrashIcons className="h-8 w-8 text-green-600 hover:text-green-700" />
      </button>
    </div>
  );
};

export default ToolBar;
