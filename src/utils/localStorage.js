// utils/localStorage.js
export const saveQuizProgress = (currentQuestionIndex, score, timeLeft) => {
  const quizProgress = { currentQuestionIndex, score, timeLeft };
  localStorage.setItem('quizProgress', JSON.stringify(quizProgress));
};

export const getQuizProgress = () => {
  const savedProgress = localStorage.getItem('quizProgress');
  return savedProgress ? JSON.parse(savedProgress) : null;
};
