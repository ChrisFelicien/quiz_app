const SECOND_PER_QUESTION = 30;

const reducer = (state, action) => {
  switch (action.type) {
    case "ready":
      return {
        ...state,
        questions: action.payload.questions,
        status: "ready",
      };
    case "error":
      return { ...state, status: "error" };

    case "active":
      return {
        ...state,
        status: "active",
        remainTime: state.questions.length * SECOND_PER_QUESTION,
      };
    case "tick":
      console.log("tick");
      return {
        ...state,
        remainTime: state.remainTime - 1,
        status: state.remainTime === 0 ? "finish" : state.status,
      };
    case "handleAnswer":
      return { ...state, userAnswer: action.payload.userAnswer };
    case "nextQuestion":
      return {
        ...state,
        index: action.payload.index + 1,
        userAnswer: null,
        correctAnswer: state.correctAnswer + action.payload.point,
      };
    case "finishQuiz":
      return {
        ...state,
        status: "finish",
        correctAnswer: state.correctAnswer + action.payload.point,
      };
    case "retake":
      return { ...action.payload.initialState };
  }

  throw new Error("This action is unknown");
};

export default reducer;
