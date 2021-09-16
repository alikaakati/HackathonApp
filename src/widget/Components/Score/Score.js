import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import './style.css';
// import '../../dataAccess/score.js';
const Score = () => {
    const [Score, setScore] = useState(0)
    useEffect(() => {
        // getscore(score) => {
            setScore(1);
        // }
    }, [])
    return (
        <div className="score-container">
            <h1 className="score-text">Score <b>{Score}</b></h1>
        </div>
    )
}

export default hot(Score);
