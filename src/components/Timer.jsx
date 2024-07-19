import { useEffect, useState } from "react";

const Timer = ({ remainTime, dispatch }) => {
  const min = Math.trunc(remainTime / 60);
  const sec = remainTime % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [dispatch]);
  return (
    <div className='bg-slate-600 py-2 px-6 rounded-full'>
      {`${min < 10 ? 0 : ""}${min}`}:{`${sec < 10 ? 0 : ""}${sec}`}
    </div>
  );
};

export default Timer;
