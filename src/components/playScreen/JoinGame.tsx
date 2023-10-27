import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const JoinGame = ({
  paramsRoom,
  paramsPassword,
}: {
  paramsRoom: string | undefined;
  paramsPassword: string | undefined;
}) => {
  const [room, setRoom] = useState(paramsRoom || "");
  const [password, setPassword] = useState(paramsPassword || "");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const joinRoom = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/join-game", {
        method: "POST",
        body: JSON.stringify({ room, password }),
      });

      if (res.status !== 200) {
        throw new Error("Error al unirse al game");
      }

      router.push(`/play/${room}`);
    } catch (error) {
      toast.error("Contraseña incorrecta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="bottom-right" />
      <form className="flex flex-col gap-4 w-96" onSubmit={joinRoom}>
        <Input
          type="text"
          variant="bordered"
          label="ID de la sala"
          onChange={(e) => setRoom(e.target.value)}
          value={room}
        />
        <Input
          type="text"
          variant="bordered"
          label="Contraseña (opcional)"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button
          variant="shadow"
          className="bg-green-600"
          type="submit"
          isLoading={loading}
        >
          Unirse a la partida
        </Button>
      </form>
    </>
  );
};

export default JoinGame;
