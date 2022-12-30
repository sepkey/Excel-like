import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <main>
      <div className="loader">
        Loading...
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </main>
  );
};

export default Loading;
