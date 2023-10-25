import { useWordStore } from "@/utils/idea-generation";
import React from "react";

const HiddenWord = () => {
  //Max length of word is 17
  // const supabase = createClientComponentClient();
  const word = "test";
  const hiddenWord = Array.from(word).map((letter) => "_");

  const { selectedWord } = useWordStore();

  return (
    <div className="text-black font-bold text-4xl tracking-widest pointer-events-none w-fit max-w-xl truncate">
      {selectedWord}
    </div>
  );
};

export default HiddenWord;
