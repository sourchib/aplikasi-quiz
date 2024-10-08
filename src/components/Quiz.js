// components/Quiz.js
import React, { useState, useEffect } from 'react';
import Question from './Question';
import fetchQuestions from '../utils/fetchQuestions';
import Timer from './Timer';

const Quiz = ({ onQuizEnd }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  useEffect(() => {
    const loadQuestions = async () => {
      const questionsData = await fetchQuestions();
      setQuestions(questionsData);
    };
    loadQuestions();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      onQuizEnd(score, questions.length);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      onQuizEnd(score, questions.length);
    }
  }, [timeLeft]);

  return (
    <div>
      <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
      {questions.length > 0 && (
        <Question
          data={questions[currentQuestionIndex]}
          onAnswerSelected={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
