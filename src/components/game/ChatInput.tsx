import useChannel from "@/utils/hooks/useChannel";
import { useWordStore } from "@/utils/idea-generation";
import React, { useEffect, useState } from "react";

const ChatInput = ({ roomId }: { roomId: string }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const { channel } = useChannel(`room-${roomId}`, "message");
  const { selectedWord } = useWordStore();

  function sendRealtime(event: string, payload: Message) {
    if (payload.message === "") {
      return;
    }

    if (selectedWord.toUpperCase() === payload.message.toUpperCase()) {
      console.log("You guessed the word!");
      return;
    }
    channel?.send({
      type: "broadcast",
      event: event,
      payload: payload,
    });
    setMessage("");
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendRealtime("message", { message, sender: username });
    }
  };

  useEffect(() => {
    const username = localStorage.getItem("username")?.split('"')[1];
    if (username) {
      setUsername(username);
    }
  }, []);

  return (
    <div className="flex gap-2">
      <input
        className="rounded-xl w-full p-2 text-black"
        type="text"
        placeholder="Escribe un mensaje"
        onKeyDown={handleKeyDown}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button
        className="bg-green-600 text-white font-bold py-2 px-4 rounded-xl"
        onClick={() => sendRealtime("message", { message, sender: username })}
      >
        Enviar
      </button>
    </div>
  );
};

export default ChatInput;
