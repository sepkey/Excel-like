import React from "react";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
const App = () => {
  return (
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <div
          className="Ecommerce"
          style={{
            direction: "rtl",
            color: "#282828",
          }}
        >
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/checkout"
                element={
                  <>
                    <Header />
                    <Checkout />
                  </>
                }
              />
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Home />
                  </>
                }
              />
            </Routes>
          </Router>
        </div>
      </StateProvider>
    </React.StrictMode>
  );
};

export default App;
