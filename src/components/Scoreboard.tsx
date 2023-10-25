import { BallIcon } from "@/utils/Icons";

const userList = [
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
  {
    id: 4,
    name: "Dave",
    score: 40,
    completed: true,
  },
  {
    id: 5,
    name: "Eve",
    score: 50,
    completed: false,
  },
  {
    id: 1,
    name: "Alice",
    score: 10,
    completed: true,
  },
  {
    id: 2,
    name: "Bob",
    score: 20,
    completed: false,
  },
  {
    id: 3,
    name: "Charlie",
    score: 30,
    completed: false,
  },
  {
    id: 4,
    name: "Dave",
    score: 40,
    completed: true,
  },
  {
    id: 5,
    name: "Eve",
    score: 50,
    completed: false,
  },
];

const Scoreboard = () => {
  return (
    <ul className="flex p-4 gap-3 rounded-xl bg-gradient-to-r from-green-500 via-green-600 to-green-700 w-full overflow-x-auto">
      {userList.map((user, index) => (
        <>
          <li key={index} className="flex gap-3 items-center">
            <BallIcon
              className={`w-8 h-8 ${
                user.completed ? "fill-white" : "fill-white/25"
              }`}
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium whitespace-nowrap">
                {user.name}
              </p>
              <p className="text-base font-normal whitespace-nowrap">
                {user.score} PTS
              </p>
            </div>
          </li>
          <div className="bg-black border" />
        </>
      ))}
    </ul>
  );
};

export default Scoreboard;
