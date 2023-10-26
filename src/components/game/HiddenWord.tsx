import { useWordStore } from "@/utils/idea-generation";
import React from "react";

const HiddenWord = () => {
  //Max length of word is 17
  const { selectedWord } = useWordStore();
  const hiddenWord = Array.from(selectedWord).map((letter) => letter);

  return (
    <div className="text-black font-bold text-4xl tracking-widest pointer-events-none w-fit max-w-xl truncate">
      {hiddenWord}
    </div>
  );
};

export default HiddenWord;
