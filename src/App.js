// App.js
import React, { useState } from 'react';
import Quiz from './components/Quiz';

const App = () => {
  const [isQuizActive, setIsQuizActive] = useState(true);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleQuizEnd = (finalScore, total) => {
    setIsQuizActive(false);
    setScore(finalScore);
    setTotalQuestions(total);
    // Lakukan hal lain seperti menampilkan hasil
  };

  return (
    <div>
      {isQuizActive ? (
        <Quiz onQuizEnd={handleQuizEnd} />
      ) : (
        <div>
          <h2>Hasil Kuis</h2>
          <p>Skor: {score} dari {totalQuestions}</p>
          {/* Tampilkan hasil lainnya */}
        </div>
      )}
    </div>
  );
};

export default App;
