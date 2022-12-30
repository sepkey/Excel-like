const reducer = (state, action) => {
  if (action.type === "START_WAITING") {
    return { ...state, waiting: true };
  }
  if (action.type === "STOP_WAITING") {
    return { ...state, waiting: false };
  }
  if (action.type === "START_LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "STOP_LOADING") {
    return { ...state, loading: false };
  }
  if (action.type === "OPEN_MODAL") {
    return { ...state, modal: true };
  }
  if (action.type === "RESET_GAME") {
    return { ...state, modal: false, correct: 0, waiting: true };
  }
  if (action.type === "GET_QUESTIONS") {
    return { ...state, questions: action.payload };
  }
  if (action.type === "INCREASE_INDEX") {
    ///////First approach
    const newIndex =
      state.index >= state.questions.length - 1 ? 0 : state.index + 1;
    ///////Second aproach
    // const newIndex =
    //   state.index+1 > state.questions.length - 1 ? 0 : state.index + 1;
    ///////Third approach
    // let newIndex = state.index + 1;
    // if (newIndex > state.questions.length - 1) {
    //   newIndex = 0;
    // }
    return { ...state, index: newIndex };
  }
  if (action.type === "INCREASE_CORRECT") {
    return { ...state, correct: state.correct + 1 };
  }
};

export default reducer;
