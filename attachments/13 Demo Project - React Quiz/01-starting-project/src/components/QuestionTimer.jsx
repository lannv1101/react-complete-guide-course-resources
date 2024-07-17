import { useEffect } from "react";
import { useState } from "react";

export default function QuestionTimer({ timeout = 15000, onTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);

    //Clean up Function
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    //Clean up Function
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
