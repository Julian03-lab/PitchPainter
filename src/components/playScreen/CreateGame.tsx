"use client";

import { Button, Checkbox, Input } from "@nextui-org/react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const CreateGame = ({}: {}) => {
  const supabase = createClientComponentClient();
  const [room, setRoom] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const createRoom = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error, data } = await supabase
        .from("games")
        .insert([
          {
            name: room,
            password: password ? password : null,
            users_count: 1,
            rounds_count: 2,
          },
        ])
        .select()
        .single();
      if (error) {
        throw error;
      }

      router.push(`/play/${data.id}`);
    } catch (error) {
      console.log("Error al crear game: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4 w-96" onSubmit={createRoom}>
      <Input
        type="text"
        variant="bordered"
        label="Nombre de la sala"
        onChange={(e) => setRoom(e.target.value)}
        value={room}
      />
      <Input
        type="text"
        variant="bordered"
        label="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        isDisabled={!isPassword}
      />
      <Checkbox
        defaultSelected
        isSelected={isPassword}
        onValueChange={() => setIsPassword(!isPassword)}
        color="success"
      >
        Partida privada
      </Checkbox>
      <Button
        variant="shadow"
        className="bg-green-600"
        type="submit"
        isLoading={loading}
        isDisabled={!room || !password === !!isPassword}
      >
        Crear partida
      </Button>
    </form>
  );
};

export default CreateGame;
