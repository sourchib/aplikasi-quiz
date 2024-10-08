// components/Question.js
import React from 'react';

const Question = ({ data, onAnswerSelected }) => {
  const shuffledAnswers = [...data.incorrect_answers, data.correct_answer].sort(() => 0.5 - Math.random());

  return (
    <div>
      <h3>{data.question}</h3>
      {shuffledAnswers.map((answer, idx) => (
        <button key={idx} onClick={() => onAnswerSelected(answer === data.correct_answer)}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Question;
