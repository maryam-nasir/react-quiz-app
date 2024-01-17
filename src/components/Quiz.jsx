import { useState } from 'react';

import QUESTIONS from '../questions';
import Question from './Question';
import Summary from './Summary';

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

    if (isQuizComplete) {
        return <Summary userAnswers={userAnswers} />
    }

    const handleAnswerSelect = (selectedAnswer) => {
        setUserAnswers(prevAnswers => ([...prevAnswers, selectedAnswer]));
    };

    return <div id="quiz">
        <Question
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelect={handleAnswerSelect}
        />
    </div>;
};

export default Quiz;