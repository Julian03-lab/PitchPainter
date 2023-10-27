import useChannel from "@/utils/hooks/useChannel";
import { useUserStore, useWordStore } from "@/utils/idea-generation";
import { Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const ChatInput = ({ roomId }: { roomId: string }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const { channel } = useChannel(`room-${roomId}`, "message");
  const { selectedWord } = useWordStore();
  const { setPoints, points, setGuessed } = useUserStore();

  function sendRealtime(event: string, payload: Message) {
    if (payload.message === "") {
      return;
    }

    if (selectedWord.toUpperCase() === payload.message.toUpperCase()) {
      setPoints(points + 1);
      setGuessed(true);
      setMessage("");
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
      <Input
        variant="faded"
        type="text"
        placeholder="Haz tu intento"
        onKeyDown={handleKeyDown}
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <Button
        className="bg-green-600 text-white font-bold rounded-xl"
        onClick={() => sendRealtime("message", { message, sender: username })}
      >
        Enviar
      </Button>
    </div>
  );
};

export default ChatInput;
