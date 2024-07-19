import Result from "./Result";

const LastScreen = ({ dispatch, initialState, correctAnswer, questions }) => {
  const percent = (correctAnswer / questions.length) * 100;
  return (
    <div className='text-center p-16'>
      <p className='text-xl mb-8'>Thanks you for trying this quiz</p>
      <Result percentage={percent} />
      <button
        className='bg-slate-400 px-8 py-2 text-xl rounded-full mt-8'
        onClick={() => dispatch({ type: "retake", payload: { initialState } })}
      >
        Retake
      </button>
    </div>
  );
};

export default LastScreen;
