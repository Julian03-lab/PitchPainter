import { useTimerStore } from "@/utils/idea-generation";
import { useEffect, useState } from "react";

const TimeCounter = () => {
  const gameMinutes = 0.5;
  const [gameMseconds, setGameMseconds] = useState(gameMinutes * 60);
  const { setTimerFinished } = useTimerStore();

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameMseconds === 0) {
        clearInterval(interval);
        setTimerFinished(true);
        return;
      }
      setGameMseconds(gameMseconds - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameMseconds, setTimerFinished]);

  return (
    <div className="bg-white rounded-full w-9 h-9 grid place-content-center ">
      <p className="text-base font-bold text-black">{gameMseconds}</p>
    </div>
  );
};

export default TimeCounter;
