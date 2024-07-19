import Option from "./Option";

const Options = ({ options, dispatch, userAnswer }) => {
  return (
    <div className='flex gap-4 flex-wrap p-4 justify-center'>
      {options.map((option) => (
        <Option
          key={crypto.randomUUID()}
          option={option}
          dispatch={dispatch}
          userAnswer={userAnswer}
        />
      ))}
    </div>
  );
};

export default Options;
