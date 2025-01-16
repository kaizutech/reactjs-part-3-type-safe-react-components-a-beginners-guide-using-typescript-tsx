import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return <p>Elapsed Time: {seconds} seconds</p>;
};

export default Timer;
