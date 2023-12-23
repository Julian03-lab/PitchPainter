import useChannel from "@/utils/hooks/useChannel";
import useStartGame from "@/utils/hooks/useStartGame";
import { client } from "@/utils/supabase/client";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const StartGame = ({
  roomId,
  votes,
  users,
}: {
  roomId: string;
  votes: number;
  users: number;
}) => {
  const [voted, setVoted] = useState(false);

  const emmitVote = async () => {
    try {
      const { error } = await client
        .from("games")
        .update({ users_vote: votes + 1 })
        .eq("id", roomId)
        .select();

      if (error) throw error;
      // setVoted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[550px] w-[800px] bg-white flex flex-col justify-center items-center gap-2">
      <h1 className="text-black">Votos para comenzar: </h1>
      <p className="text-black">
        {votes}/{users}
      </p>
      {!voted ? (
        <Button variant="solid" size="lg" color="primary" onClick={emmitVote}>
          Votar para iniciar
        </Button>
      ) : (
        <p className="text-black">Esperando votos</p>
      )}
      {/* <Button
        variant="solid"
        size="lg"
        color="primary"
        onClick={handleStartGame}
      >
        {!timerStarted ? "Iniciar" : gameMseconds}
      </Button> */}
    </div>
  );
};

export default StartGame;
