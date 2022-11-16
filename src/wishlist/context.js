import React, { useReducer, useContext, createContext, useEffect } from "react";
// import { items } from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = createContext();

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0,
};

const AppProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider value={{ ...state, clearCart, remove, toggleAmount }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);

export { AppProvider, AppContext };
