import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [count, setCount] = React.useState(0);

  const handleKeyDown = (event) => {
    if (event.key !== "Enter") {
      return;
    }
    let val = event.target.value;
    val = Math.floor(val);

    if (val < 0) {
      val = 0;
    }

    setCount(val);
  };

  useEffect(() => {
    let intervalId = 0;
    if (count > 0) {
      intervalId = setInterval(() => {
        setCount(count - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  });

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" type="number" onKeyDown={handleKeyDown} />
        </h1>
      </div>
      <div id="current-time">{count}</div>
    </div>
  );
};

export default App;
