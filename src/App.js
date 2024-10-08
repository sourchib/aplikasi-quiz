import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Login from './components/Login';

const App = () => {
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    // Cek status login dari localStorage
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsQuizActive(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('quizProgress');
    localStorage.removeItem('quizScore');
    localStorage.removeItem('quizTimeLeft');
  };

  const handleQuizEnd = (finalScore, total) => {
    setIsQuizActive(false);
    setScore(finalScore);
    setTotalQuestions(total);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          {isQuizActive ? (
            <Quiz onQuizEnd={handleQuizEnd} />
          ) : (
            <div>
              <h2>Hasil Kuis</h2>
              <p>Skor: {score} dari {totalQuestions}</p>
              <button onClick={() => setIsQuizActive(true)}>Mulai Kuis Lagi</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
