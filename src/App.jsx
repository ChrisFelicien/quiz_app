import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import reducer from "./reducer";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import LastScreen from "./components/LastScreen";
import { questions } from "./questions.json";

const initialState = {
  questions,
  //Loading Error ready active finished
  status: "ready",
  index: 0,
  userAnswer: null,
  correctAnswer: 0,
  remainTime: null,
};

const App = () => {
  const [
    { questions, status, index, userAnswer, correctAnswer, remainTime },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestion = questions.length;

  // useEffect(() => {
  //   const fetchQuestion = async () => {
  //     try {
  //       const res = await fetch("http://localhost:3000/questions");
  //       if (!res.ok)
  //         throw new Error("Something went wrong with fetching question.");
  //       const questions = await res.json();
  //       dispatch({ type: "ready", payload: { questions } });
  //     } catch (error) {
  //       dispatch({ type: "error" });
  //     }
  //   };
  //   // fetchQuestion();
  //   dispatch({ type: "ready", payload: { questions } });
  // }, []);
  const currentQuestion = questions[index];
  return (
    <div className='min-h-screen  bg-slate-900 text-white '>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestion={numQuestion} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Quiz
            dispatch={dispatch}
            currentQuestion={currentQuestion}
            userAnswer={userAnswer}
            index={index}
            questions={questions}
            remainTime={remainTime}
          />
        )}
        {status === "finish" && (
          <LastScreen
            dispatch={dispatch}
            initialState={initialState}
            questions={questions}
            correctAnswer={correctAnswer}
          />
        )}
      </Main>
    </div>
  );
};

export default App;
