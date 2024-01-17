import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions';

const Summary = ({ userAnswers }) => {
    const skipped = userAnswers.filter((answer) => answer === null).length / userAnswers.length * 100;
    const correct = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length / userAnswers.length * 100;

    return <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
            <p>
                <span className='number'>{Math.round(skipped)}%</span>
                <span className='text'>skipped</span>
            </p>
            <p>
                <span className='number'>{Math.round(correct)}%</span>
                <span className='text'>answered correctly</span>
            </p>
            <p>
                <span className='number'>{Math.round(100 - correct - skipped)}%</span>
                <span className='text'>answered incorrectly</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer, index) => {
                let cssClass = 'user-answer';
                if (answer === null) {
                    cssClass += ' skipped';
                } else if (answer === QUESTIONS[index].answers[0]) {
                    cssClass += ' correct';
                } else {
                    cssClass += ' wrong';
                }
                return (
                    <li key={index}>
                        <h3>{index + 1}</h3>
                        <p className='question'>{QUESTIONS[index].text}</p>
                        <p className={cssClass}>{answer ?? 'Skipped'}</p>
                    </li>
                );
            })}
        </ol>
    </div>;
};

export default Summary;