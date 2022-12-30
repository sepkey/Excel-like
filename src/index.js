import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/fonts/Vazir.eot";
import "./assets/fonts/Vazir.woff2";
import "./assets/fonts/Vazir.woff";
import "./assets/fonts/Vazir.ttf";
import "./assets/fonts/Vazir-Bold.eot";
import "./assets/fonts/Vazir-Bold.woff";
import "./assets/fonts/Vazir-Bold.woff2";
import "./assets/fonts/Vazir-Bold.ttf";
// import App from "./wishlist/project5";
// import { AppProvider } from "./wishlist/context";
// import App from "./yakhdoonShop/project1";
import App from "./single-choice-quiz/project2";
import { AppProvider } from "./single-choice-quiz/Context/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
