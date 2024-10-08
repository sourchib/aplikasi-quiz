// components/Result.js
import React from 'react';

const Result = ({ score, total }) => {
  return (
    <div>
      <h2>Quiz Completed</h2>
      <p>Correct Answers: {score}</p>
      <p>Total Questions: {total}</p>
    </div>
  );
};

export default Result;
