import React from "react";
import MiniDrawer from "./MiniDrawer";
// import Header from "./Header";
// import CardContainer from "./CardContainer";
import useTheme from "@mui/material/styles/useTheme";
// import { Typography } from "@mui/material";

const App = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <div className="App">
      {/* <div>
        {" "}
        <Header />{" "}
      </div>
      <div>
        <CardContainer />
      </div> */}
      <MiniDrawer />
      {/* <Typography color={"colorFailure.main"}>Hello guys</Typography> */}
    </div>
  );
};

export default App;
//
