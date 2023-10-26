"use client";

import CreateGame from "@/components/playScreen/CreateGame";
import JoinGame from "@/components/playScreen/JoinGame";
import { useUserStore } from "@/utils/idea-generation";
import Link from "next/link";
import { useEffect, useState } from "react";

enum Selected {
  CREATE = "CREATE",
  JOIN = "JOIN",
}

const Play = () => {
  const { setUser, user } = useUserStore();
  const [room, setRoom] = useState("");
  const [selected, setSelected] = useState(Selected.CREATE);

  const changeSelected = (selected: Selected) => {
    setRoom("");
    setSelected(selected);
  };

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(user));
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-28 py-12 gap-6">
      <h1 className="text-white text-6xl font-bold">Lets play!</h1>
      <div className="flex gap-2">
        <button
          className={`bg-green-600 rounded-xl py-2 px-3 text-white font-bold text-lg ${
            selected === Selected.CREATE
              ? "border-2 border-white-600"
              : "border-2 border-green-600"
          }`}
          onClick={() => changeSelected(Selected.CREATE)}
        >
          Create Game
        </button>
        <button
          className={`bg-green-600 rounded-xl py-2 px-3 text-white font-bold text-lg ${
            selected === Selected.JOIN
              ? "border-2 border-white-600"
              : "border-2 border-green-600"
          }`}
          onClick={() => changeSelected(Selected.JOIN)}
        >
          Join Game
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <label htmlFor="username" className="text-white text-4xl font-bold">
          Username
        </label>
        <input
          id="username"
          className="rounded-xl w-full p-2 text-black"
          type="text"
          placeholder="Tito Pacheco"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
      </div>
      {selected === Selected.CREATE ? (
        <CreateGame />
      ) : (
        <JoinGame room={room} setRoom={setRoom} />
      )}
      <Link
        href={`/play/${room}`}
        className={`bg-green-600 rounded-xl p-4 text-white font-bold text-4xl ${
          !room || !user ? "pointer-events-none opacity-50" : ""
        }`}
      >
        Play
      </Link>
    </main>
  );
};

export default Play;
