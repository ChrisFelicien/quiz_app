const Progress = ({ index, questions }) => {
  return (
    <div className='flex justify-center items-center p-4'>
      <progress
        className='w-96  bg-black h-1 border-none flex-grow'
        value={index}
        max={questions.length}
      ></progress>
    </div>
  );
};

export default Progress;
