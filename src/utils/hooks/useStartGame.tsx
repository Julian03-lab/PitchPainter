import { useEffect } from "react";
import { useRoomStore } from "../idea-generation";
import { client } from "../supabase/client";

const useStartGame = (roomId: string) => {
  const { setVotes, setUsersCount, usersCount, votes } = useRoomStore();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const { data, error } = await client
          .from("games")
          .select("users_count, users_vote")
          .eq("id", roomId)
          .single();

        if (error) throw error;

        setVotes(data.users_vote);
        setUsersCount(data.users_count);
      } catch (error) {
        console.log(error);
      }
    };

    const roomOne = client.channel(`room-${roomId}`);

    roomOne
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          table: "games",
          schema: "public",
          filter: "id=eq." + roomId,
        },
        (payload): void => {
          const {
            users_count,
            users_vote,
          }: { users_count?: number; users_vote?: string } = payload.new;
          setVotes(Number(users_vote));
          setUsersCount(Number(users_count));
        }
      )
      .subscribe();

    fetchGame();

    return () => {
      roomOne.unsubscribe();
    };
  }, [roomId, setUsersCount, setVotes]);

  return { usersCount, votes };
};

export default useStartGame;
