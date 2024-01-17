import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../questions";

const Question = ({ index, onSelect }) => {
    const [answerState, setAnswerState] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState();

    const handleAnswerSelect = (answer) => {
        setAnswerState('answered');
        setSelectedAnswer(answer);

        setTimeout(() => {
            if (answer === QUESTIONS[index].answers[0]) {
                setAnswerState('correct');
            } else {
                setAnswerState('wrong');
            }

            setTimeout(() => {
                setAnswerState('');
                onSelect(answer);
            }, 2000);
        }, 1000);
    };

    return (
        <div id="question">
            <QuestionTimer answerState={answerState} timeout={10000} onTimeout={() => onSelect(null)} />
            <h2>{QUESTIONS[index].text}</h2>
            <Answers
                answers={QUESTIONS[index].answers}
                selectedAnswer={selectedAnswer}
                answerState={answerState}
                onSelect={handleAnswerSelect} />
        </div>
    );
};

export default Question;