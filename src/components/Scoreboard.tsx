const userList = [
  {
    id: 1,
    name: "Alice",
    score: 10,
  },
  {
    id: 2,
    name: "Bob",
    score: 20,
  },
  {
    id: 3,
    name: "Charlie",
    score: 30,
  },
  {
    id: 4,
    name: "Dave",
    score: 40,
  },
  {
    id: 5,
    name: "Eve",
    score: 50,
  },
];

const Scoreboard = () => {
  return (
    <ul className="flex py-5 px-4 gap-3 rounded-xl bg-slate-500">
      {userList.map((user) => (
        <>
          <li key={user.id} className="flex gap-2">
            <div className="w-12 h-12 bg-green-400 rounded-full"></div>
            <div className="flex flex-col items-center">
              <p className="text-lg font-medium">{user.name}</p>
              <p className="text-base font-normal">{user.score} PTS</p>
            </div>
          </li>
          <div className="bg-green-600 w-0.5" />
        </>
      ))}
    </ul>
  );
};

export default Scoreboard;
