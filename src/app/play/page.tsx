"use client";

import CreateGame from "@/components/playScreen/CreateGame";
import JoinGame from "@/components/playScreen/JoinGame";
import { useUserStore } from "@/utils/idea-generation";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

enum Selected {
  CREATE = "CREATE",
  JOIN = "JOIN",
}

const Play = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { setUser, user } = useUserStore();

  const selected =
    typeof searchParams.mode === "string"
      ? searchParams.mode.toUpperCase()
      : undefined;

  const room =
    typeof searchParams.room === "string" ? searchParams.room : undefined;

  const password =
    typeof searchParams.password === "string"
      ? searchParams.password
      : undefined;

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(user));
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-28 py-12 gap-6">
      <h1 className="text-white text-6xl font-bold">Lets play</h1>
      <div className="flex gap-2">
        <Link
          href="/play?mode=create"
          className={`bg-green-600 rounded-xl py-2 px-3 text-white font-bold text-lg ${
            selected === Selected.CREATE
              ? "border-2 border-white-600"
              : "border-2 border-green-600"
          }`}
        >
          Create Game
        </Link>
        <Link
          href="/play?mode=join"
          className={`bg-green-600 rounded-xl py-2 px-3 text-white font-bold text-lg ${
            selected === Selected.JOIN
              ? "border-2 border-white-600"
              : "border-2 border-green-600"
          }`}
        >
          Join Game
        </Link>
      </div>

      <div className="flex flex-col gap-4">
      <Input
        type="text"
        variant="bordered"
        label="Username"
        onChange={(e) => setUser(e.target.value)}
          value={user}
      />
      </div>
      {selected === Selected.CREATE ? (
        <CreateGame />
      ) : (
        <JoinGame paramsPassword={password} paramsRoom={room} />
      )}
    </main>
  );
};

export default Play;
