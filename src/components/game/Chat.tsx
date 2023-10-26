"use client";

import Top3Chat from "./Top3Chat";
import useChannel from "@/utils/hooks/useChannel";
import ChatInput from "./ChatInput";

const Chat = ({ roomId }: { roomId: string }) => {
  const { messages } = useChannel(`room-${roomId}`, "message");

  return (
    <div className="border-4 border-green-600 rounded-xl flex flex-col justify-between py-4 px-2 max-w-xs gap-4">
      <div className="flex flex-col justify-between h-full">
        <Top3Chat />
        <div className="flex flex-col gap-2 w-full flex-wrap">
          {messages.map((userMessage, i) => (
            <div key={i} className="flex gap-2 w-full">
              <span className="break-all">
                <strong>{userMessage.sender}:</strong> {userMessage.message}
              </span>
            </div>
          ))}
        </div>
      </div>
      <ChatInput roomId={roomId} />
    </div>
  );
};

export default Chat;
