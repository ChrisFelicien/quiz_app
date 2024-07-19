import Button from "./Button";

const StartScreen = ({ numQuestion, dispatch }) => {
  return (
    <div className='grid place-content-center py-10 gap-10 text-center'>
      <h2 className='text-xl capitalize font-bold'>
        Welcome to our basic test!
      </h2>
      <p>{numQuestion} questions to test your knowledge about DRC</p>
      <Button text={"Start"} dispatch={dispatch} type={"active"} />
    </div>
  );
};

export default StartScreen;
