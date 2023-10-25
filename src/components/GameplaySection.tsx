"use client";

import { useRef, useState } from "react";
import Canvas from "./Canvas";
import Chat from "./Chat";
import { TrashIcons } from "@/utils/Icons";
import Scoreboard from "./Scoreboard";

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

const GameplaySection = () => {
  const [color, setColor] = useState("#000");
  const [lineWidth, setLineWidth] = useState(10);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2 flex-wrap">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setColor(color)}
                className="w-7 h-7 border border-gray-400"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <button ref={buttonRef}>
            <TrashIcons className="h-8 w-8 text-green-600 hover:text-green-700" />
          </button>
        </div>
        <Canvas
          buttonRef={buttonRef}
          canvasHeight={550}
          canvasWidth={850}
          canvasStyle="border-4 border-green-600 bg-white rounded-xl"
          color={color}
          lineWidth={10}
        />
        <Chat />
      </div>
      <Scoreboard />
    </div>
  );
};

export default GameplaySection;
