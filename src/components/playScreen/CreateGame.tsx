"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const CreateGame = ({}: {}) => {
  const supabase = createClientComponentClient();
  const [room, setRoom] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const router = useRouter();

  const createRoom = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
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
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={createRoom}>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isPassword}
          className="sr-only peer"
          onChange={() => setIsPassword(!isPassword)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Acceso con contraseña
        </span>
      </label>
      <div className="flex flex-col gap-4">
        <label htmlFor="room" className="text-white text-4xl font-bold">
          Create your room
        </label>
        <input
          id="room"
          className="rounded-xl w-full p-2 text-black"
          type="text"
          placeholder="Room name"
          onChange={(e) => setRoom(e.target.value)}
          value={room}
        />
      </div>
      {isPassword && (
        <div className="flex flex-col gap-4">
          <label htmlFor="room" className="text-white text-4xl font-bold">
            Set password
          </label>
          <input
            id="room"
            className="rounded-xl w-full p-2 text-black"
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
      )}
      <button
        className="bg-green-600 rounded-xl py-2 px-3 text-white font-bold text-lg"
        type="submit"
      >
        Crear partida
      </button>
    </form>
  );
};

export default CreateGame;
