"use client";

import { useEffect, useState } from "react";
import Top3Chat from "./Top3Chat";
import { client } from "@/utils/supabase/client";
import { RealtimeChannel } from "@supabase/supabase-js";

const Chat = () => {
  const [channel, setChannel] = useState<RealtimeChannel>();
  const [message, setMessage] = useState<Message>({
    message: "",
    sender: "",
  });
  const [messages, setMessages] = useState<Message[]>([]);

  function sendRealtime(event: string, payload: Message) {
    channel?.send({
      type: "broadcast",
      event: event,
      payload: payload,
    });
  }

  useEffect(() => {
    const roomOne = client.channel("room-one", {
      config: {
        broadcast: {
          self: true,
        },
      },
    });

    roomOne.on("broadcast", { event: "message" }, ({ payload }) => {
      setMessages((messages) => [...messages, payload]);
    });

    roomOne.subscribe();

    setChannel(roomOne);

    return () => {
      roomOne.unsubscribe();
      setChannel(undefined);
    };
  }, []);

  return (
    <div className="border-4 border-green-600 rounded-xl flex flex-col justify-between py-4 px-2 max-w-xs gap-2">
      <div className="flex flex-col justify-between h-full">
        <Top3Chat />
        <ul className="flex flex-col gap-2">
          {messages.map((userMessage, i) => (
            <li key={i} className="flex gap-2">
              <span className="font-bold text-base">
                {userMessage.sender}:{" "}
              </span>
              <span className="text-base">{userMessage.message}</span>
            </li>
          ))}
        </ul>
      </div>
      <input
        className="rounded-xl w-full p-2 text-black"
        type="text"
        placeholder="nombre"
        onChange={(e) =>
          setMessage((prevState) => ({
            message: prevState.message,
            sender: e.target.value,
          }))
        }
        value={message.sender}
      />
      <div className="flex gap-2">
        <input
          className="rounded-xl w-full p-2 text-black"
          type="text"
          placeholder="Escribe un mensaje"
          onChange={(e) =>
            setMessage((prevState) => ({
              sender: prevState.sender,
              message: e.target.value,
            }))
          }
          value={message.message}
        />
        <button
          className="bg-green-600 text-white font-bold py-2 px-4 rounded-xl"
          onClick={() => sendRealtime("message", message)}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
