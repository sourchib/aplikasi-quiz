// components/Question.js
import React from 'react';

const Question = ({ data, onAnswerSelected }) => {
    if (!data) {
        return <div>Loading question...</div>; // Menangani saat data belum tersedia
    }

    const { question, correct_answer, incorrect_answers } = data;

    const handleAnswer = (answer) => {
        const isCorrect = answer === correct_answer;
        onAnswerSelected(isCorrect);
    };

    return (
        <div>
            <h3 dangerouslySetInnerHTML={{ __html: question }} />
            {incorrect_answers.concat(correct_answer).map((answer, index) => (
                <button key={index} onClick={() => handleAnswer(answer)}>
                    {answer}
                </button>
            ))}
        </div>
    );
};

export default Question;
