import Button from "./Button";
import Options from "./Options";
import Progress from "./Progress";
import Timer from "./Timer";

const Quiz = ({
  currentQuestion,
  dispatch,
  userAnswer,
  index,
  questions,
  remainTime,
}) => {
  const { question, options, correct } = currentQuestion;

  const point = correct === userAnswer ? 1 : 0;

  return (
    <div className='grid place-content-center'>
      <Progress index={index} questions={questions} />
      <p className='text-xl text-center mb-10'>{question}</p>
      <Options options={options} dispatch={dispatch} userAnswer={userAnswer} />
      <div className='py-12 flex justify-between px-16'>
        <Timer remainTime={remainTime} dispatch={dispatch} />
        {userAnswer && (
          <Button
            text={questions.length > index + 1 ? "Next" : "Finish"}
            dispatch={dispatch}
            type={questions.length - 1 > index ? "nextQuestion" : "finishQuiz"}
            index={index}
            point={point}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
