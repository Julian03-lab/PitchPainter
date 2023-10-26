import React, { Dispatch, SetStateAction } from "react";

const JoinGame = ({
  room,
  setRoom,
}: {
  room: string;
  setRoom: Dispatch<SetStateAction<string>>;
}) => {
  return (
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
  );
};

export default JoinGame;
