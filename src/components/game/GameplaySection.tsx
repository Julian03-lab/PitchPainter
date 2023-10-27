"use client";

import { useEffect, useRef, useState } from "react";
import Canvas from "./Canvas";
import Chat from "./Chat";
import Scoreboard from "./Scoreboard";
import HelperBar from "./HelperBar";
import { useTimerStore, useWordStore } from "@/utils/idea-generation";
import ToolBar from "./ToolBar";
import usePresence from "@/utils/hooks/usePresence";

const GameplaySection = ({
  selectedWord,
  roomId,
}: {
  selectedWord: string;
  roomId: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { setSelectedWord } = useWordStore();
  const { timerFinished } = useTimerStore();
  const { users } = usePresence(roomId);

  console.log(users);

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
        <Chat roomId={roomId} />
      </div>
      <Scoreboard users={users} />
    </div>
  );
};

export default GameplaySection;
