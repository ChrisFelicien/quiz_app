const Button = ({ dispatch, text, type, index = 0, point = 0 }) => {
  return (
    <button
      className='bg-slate-800 self-center justify-center py-3 px-8 rounded-full text-xl hover:bg-slate-700 font-bold'
      onClick={() => dispatch({ type, payload: { index, point } })}
    >
      {text}
    </button>
  );
};

export default Button;
