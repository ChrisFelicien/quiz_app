const Option = ({ option, dispatch, userAnswer }) => {
  return (
    <div className=' block w-1/3'>
      <button
        className='bg-slate-500 py-1 px-6 w-full rounded-full hover:bg-slate-600 text-xl'
        onClick={() =>
          dispatch({ type: "handleAnswer", payload: { userAnswer: option } })
        }
        disabled={userAnswer ? true : false}
      >
        {option}
      </button>
    </div>
  );
};

export default Option;
