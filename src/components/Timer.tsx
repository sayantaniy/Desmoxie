import { useEffect, useState } from "react";

export default function Pomodoro() {
  const WORK_TIME = 25 * 60;   // 25 min
  const BREAK_TIME = 5 * 60;   // 5 min

  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isWork, setIsWork] = useState(true); // true = work, false = break

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning) {
      interval = window.setInterval(() => {
        setTimeLeft(prev => {
          if (prev === 1) {
            // Switch mode
            const next = isWork ? BREAK_TIME : WORK_TIME;
            setIsWork(!isWork);
            return next;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isWork]);

  const format = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div>
      <h2>{isWork ? "Work" : "Break"}</h2>
      <h1>{format(timeLeft)}</h1>

      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={() => {
        setIsRunning(false);
        setIsWork(true);
        setTimeLeft(WORK_TIME);
      }}>
        Reset
      </button>
    </div>
  );
}
