import { useEffect, useState } from "react";
import { client } from "../supabase/client";
import { RealtimeChannel } from "@supabase/supabase-js";
import { useUserStore } from "../idea-generation";
import { updateUserCount } from "../supabase/functions/updateUserCount";

const usePresence = (room: string) => {
  const [channel, setChannel] = useState<RealtimeChannel>();
  const [users, setUsers] = useState<any[]>([]);
  const { guessed, points, user, setUser } = useUserStore();

  useEffect(() => {
    setUser(localStorage.getItem("username")?.split('"')[1] || "Guest");

    const roomOne = client.channel(room);
    roomOne.on("presence", { event: "sync" }, async () => {
      const presenceState = roomOne.presenceState();

      const users = Object.keys(presenceState)
        .map((presenceId) => {
          const presences = presenceState[presenceId] as unknown as User[];
          return presences;
        })
        .flat();

      await updateUserCount(users.length, room);
      setUsers(users.sort((a, b) => b.points - a.points));
    });

    roomOne.subscribe((status) => {
      if (status === "SUBSCRIBED") {
        roomOne.track({ username: user, guessed, points });
      }
    });

    setChannel(roomOne);

    return () => {
      roomOne.unsubscribe();
      setChannel(undefined);
    };
  }, [guessed, points, room, setUser, user]);

  return { users, channel };
};

export default usePresence;
