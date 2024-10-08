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

  // Effect untuk mengelola timer
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(timerId); // Hentikan timer jika waktu habis
          onQuizEnd(score, questions.length); // Akhiri kuis jika waktu habis
          return 0; // Pastikan waktu tidak negatif
        }
        return prevTimeLeft - 1; // Kurangi waktu
      });
    }, 1000);

    return () => clearInterval(timerId); // Bersihkan interval saat komponen di-unmount
  }, [score, questions.length, onQuizEnd]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      onQuizEnd(score, questions.length); // Akhiri kuis jika sudah menjawab semua pertanyaan
    }
  };

  return (
    <div>
      <Timer timeLeft={timeLeft} />
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
