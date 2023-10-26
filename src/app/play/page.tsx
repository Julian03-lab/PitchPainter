"use client";

import { useUserStore } from "@/utils/idea-generation";
import Link from "next/link";
import { useEffect, useState } from "react";

const Play = () => {
  const { setUser, user } = useUserStore();
  const [room, setRoom] = useState("");

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(user));
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-28 py-12 gap-6">
      <h1 className="text-white text-6xl font-bold">Enter to a game</h1>
      <div className="w-full gap-8 flex justify-center">
        <div className="flex flex-col gap-4">
          <label htmlFor="room" className="text-white text-4xl font-bold">
            Enter your room
          </label>
          <input
            id="room"
            className="rounded-xl w-full p-2 text-black"
            type="text"
            placeholder="Room code"
            onChange={(e) => setRoom(e.target.value)}
            value={room}
          />
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
      </div>
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
