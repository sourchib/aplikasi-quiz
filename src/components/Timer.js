// components/Timer.js
import React from 'react';

const Timer = ({ timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <h2>Waktu Tersisa: {minutes} : {seconds < 10 ? `0${seconds}` : seconds} detik</h2>
    </div>
  );
};

export default Timer;
