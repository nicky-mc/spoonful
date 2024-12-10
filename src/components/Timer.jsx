// src/components/Timer.jsx
import React, { useState, useEffect } from "react";

const Timer = ({ duration, onComplete }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time === 0) {
      onComplete();
      return;
    }

    const timer = setInterval(() => setTime((prev) => prev - 1), 1000);

    return () => clearInterval(timer);
  }, [time, onComplete]);

  return <div>{`Time Left: ${time}s`}</div>;
};

export default Timer;
