// components/Timer.js
import React, { useEffect } from 'react';

const Timer = ({ timeLeft, setTimeLeft }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [setTimeLeft]);

  return <div>Time Left: {timeLeft}s</div>;
};

export default Timer;
