import React from "react";
import { useAppContext } from "./context";
import "./project5.scss";
//components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

const App = () => {
  const { loading } = useAppContext();
  if (loading) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <main className="app">
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
