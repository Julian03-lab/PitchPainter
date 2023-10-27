import { BallIcon } from "@/utils/Icons";
import usePresence from "@/utils/hooks/usePresence";

const Scoreboard = ({ users }: { users: any[] }) => {
  return (
    <ul className="flex h-[68px] py-2 px-4 gap-3 rounded-xl bg-gradient-to-r from-green-500 via-green-600 to-green-700 w-full overflow-x-auto">
      {users.map((user) => (
        <li key={user.presence_ref} className="flex gap-3 items-center">
          <BallIcon
            className={`w-8 h-8 ${
              user.guessed ? "fill-white" : "fill-white/25"
            }`}
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium whitespace-nowrap">
              {user.username}
            </p>
            <p className="text-base font-normal whitespace-nowrap">
              {user.points} PTS
            </p>
          </div>
          <div className="bg-black border h-full" />
        </li>
      ))}
    </ul>
  );
};

export default Scoreboard;
