import { useState, useEffect } from 'react';

const QuestionTimer = ({ answerState, timeout, onTimeout }) => {
    const [timeRemaining, setTimeRemaining] = useState(timeout);

    useEffect(() => {
        if (answerState === '') {
            const timer = setTimeout(() => {
                onTimeout();
            }, timeout);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [timeout, answerState]);

    useEffect(() => {
        if (answerState === '') {
            const interval = setInterval(() => {
                setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 100);
            }, 100);

            return () => {
                clearInterval(interval);
            };
        }
    }, [answerState]);

    return <progress id="progress" max={timeout} value={timeRemaining} />;
};

export default QuestionTimer;