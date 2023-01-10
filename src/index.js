// import "../src/assets/fonts/Vazir.eot";
// import "../src/assets/fonts/Vazir.woff2";
// import "../src/assets/fonts/Vazir.woff";
// import "../src/assets/fonts/Vazir.ttf";
// import "../src/assets/fonts/Vazir-Bold.eot";
// import "../src/assets/fonts/Vazir-Bold.woff";
// import "../src/assets/fonts/Vazir-Bold.woff2";
// import "../src/assets/fonts/Vazir-Bold.ttf";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./project3";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
