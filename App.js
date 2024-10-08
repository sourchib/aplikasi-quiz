import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const [user, setUser] = useState(null);
  const [quizEnded, setQuizEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleQuizEnd = (finalScore, total) => {
    setScore(finalScore);
    setTotalQuestions(total);
    setQuizEnded(true);
  };

  return (
    <Router>
      <div className="App">
        {!user ? (
          <Login onLogin={handleLogin} />
        ) : !quizEnded ? (
          <Quiz onQuizEnd={handleQuizEnd} />
        ) : (
          <Result score={score} total={totalQuestions} />
        )}
      </div>
    </Router>
  );
}

export default App;
