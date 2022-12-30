import { useContext, createContext, useReducer, useState } from "react";
import reducer from "./reducer";
import axios from "axios";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};
const AppContext = createContext();
const initialState = {
  //ui
  waiting: true,
  loading: false,
  modal: false,
  //logic-ui
  error: false, //not used
  //logic
  questions: [],
  index: 0,
  correct: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputObject, setInputObject] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });

  const fetchQuestions = async (url) => {
    dispatch({ type: "STOP_WAITING" });
    dispatch({ type: "START_LOADING" });

    const response = await axios(url).catch((err) => console.log(err));
    if (response.status === 200) {
      const data = response.data.results;
      if (data.length > 0) {
        dispatch({ type: "GET_QUESTIONS", payload: data });
        dispatch({ type: "STOP_LOADING" });
        dispatch({ type: "STOP_WAITING" });
        // setError(false);why
      }
      if (data.length === 0) {
        dispatch({ type: "START_WAITING" });
        // setLoading(true);why
      }
    }
    if (response.status !== 200) {
      dispatch({ type: "START_WAITING" });
    }
  };

  const nextQuestion = () => {
    // const index = state.index + 1;
    // if (index > state.questions.length - 1) {
    //   openModal();
    //   dispatch({ type: "INCREASE_INDEX", payload: 0 });
    // } else {
    //   dispatch({ type: "INCREASE_INDEX", payload: index });
    // }
    dispatch({ type: "INCREASE_INDEX" });
    if (state.index + 1 > state.questions.length - 1) {
      openModal();
    }
  };
  const checkAnswers = (value) => {
    if (value) {
      dispatch({ type: "INCREASE_CORRECT" });
    }
    nextQuestion();
  };

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  const resetGame = () => {
    dispatch({ type: "RESET_GAME" });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputObject({ ...inputObject, [name]: value });
  };
  console.log(state.correct);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, difficulty, category } = inputObject;
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
    fetchQuestions(url);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        inputObject,
        handleSubmit,
        handleChange,
        nextQuestion,
        resetGame,
        checkAnswers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppContext, AppProvider };
