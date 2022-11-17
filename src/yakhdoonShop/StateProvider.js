import { useReducer, useContext, createContext } from "react";

//data layer
export const StateContext = createContext();

//Wrapper around main App
function StateProvider({ reducer, initialState, children }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}
export { StateProvider };

//Pull information from data layer
export const useStateValue = () => useContext(StateContext);
