import { useEffect, useState } from "react";
import { client } from "../supabase/client";
import { RealtimeChannel } from "@supabase/supabase-js";

const useChannel = (room: string, event: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [channel, setChannel] = useState<RealtimeChannel>();

  useEffect(() => {
    const roomOne = client.channel(room, {
      config: {
        broadcast: {
          self: true,
        },
      },
    });

    roomOne.on("broadcast", { event: event }, ({ payload }) => {
      setMessages((messages) => [...messages, payload]);
    });

    roomOne.subscribe();

    setChannel(roomOne);

    return () => {
      roomOne.unsubscribe();
      setChannel(undefined);
    };
  }, [event, room]);

  return { messages, channel };
};

export default useChannel;
