"use client";

import { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import Chat from "./Chat";
import Scoreboard from "./Scoreboard";
import HelperBar from "./HelperBar";
import { useTimerStore, useWordStore } from "@/utils/idea-generation";
import ToolBar from "./ToolBar";
import { client } from "@/utils/supabase/client";

const GameplaySection = ({ selectedWord }: { selectedWord: string }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { setSelectedWord } = useWordStore();
  const { timerFinished } = useTimerStore();

  useEffect(() => {
    setSelectedWord(selectedWord);
  }, [selectedWord, setSelectedWord]);

  return (
    <div className="flex flex-col w-full gap-4 max-w-[1216px]">
      <div className="flex w-full justify-between">
        <ToolBar buttonRef={buttonRef} />
        <div className="flex flex-col gap-2">
          <HelperBar />
          <Canvas
            buttonRef={buttonRef}
            canvasHeight={550}
            canvasWidth={800}
            canvasStyle="border-4 border-green-600 bg-white rounded-xl"
            lineWidth={10}
          />
        </div>
        <Chat />
      </div>
      <Scoreboard />
    </div>
  );
};

export default GameplaySection;
