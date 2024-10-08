// src/components/Result.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Result = ({ score, totalQuestions }) => {
    const navigate = useNavigate();
    const incorrectAnswers = totalQuestions - score;

    const handleRestart = () => {
        navigate('/'); // Kembali ke halaman login
    };

    return (
        <div>
            <h2>Kuis Selesai!</h2>
            <p>Jumlah Benar: {score}</p>
            <p>Jumlah Salah: {incorrectAnswers}</p>
            <p>Total Soal: {totalQuestions}</p>
            <button onClick={handleRestart}>Mulai Ulang Kuis</button>
        </div>
    );
};

export default Result;
