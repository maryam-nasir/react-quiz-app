import { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = answer === selectedAnswer;
                let cssClass = '';
                if (answerState === 'answered' && isSelected) {
                    cssClass = 'selected';
                } else if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                    cssClass = answerState;
                }
                return (
                    <li key={answer} className='answer'>
                        <button className={cssClass} onClick={() => onSelect(answer)}>{answer}</button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Answers;