import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  let [val, setval] = React.useState(0);

  const handleKeyDown = (event) => {
    val = +event.target.value;
    if (typeof val === "number") {
      val = Math.floor(val);
      setval(val);
      if (event.key === "Enter") {
        let intervalId = setInterval(() => {
          val = val - 1;
          setval(val);

          if (val === 0) {
            clearInterval(intervalId);
          }
        }, 1000);
      }
    }
  };

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleKeyDown} />
        </h1>
      </div>
      <div id="current-time">{val}</div>
    </div>
  );
};

export default App;
