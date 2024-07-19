const reducer = (state, action) => {
  switch (action.type) {
    case "ready":
      return { ...state, questions: action.payload.questions, status: "ready" };
    case "error":
      return { ...state, status: "error" };

    case "active":
      return { ...state, status: "active" };
    case "handleAnswer":
      return { ...state, userAnswer: action.payload.userAnswer };
    case "nextQuestion":
      console.log(action.payload.point);
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
