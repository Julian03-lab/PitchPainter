import React from "react";

const users = [
  {
    id: 1,
    name: "Alice",
    score: 10,
    completed: true,
  },
  {
    id: 2,
    name: "BobBobBobBobBob",
    score: 20,
    completed: false,
  },
  {
    id: 3,
    name: "Charlie",
    score: 30,
    completed: false,
  },
];

const Top3Chat = () => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="flex gap-2 items-center justify-center">
            <div className="bg-green-600 rounded-full w-4 h-4"></div>
            <div>
              <span className="font-bold text-xl">{user.name}</span>
              {/* <span className="text-lg">{user.score}</span> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Top3Chat;
