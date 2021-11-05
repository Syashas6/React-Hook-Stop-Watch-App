import React, { useState } from "react";

function App() {
  const [time, getTime] = useState(new Date().toLocaleTimeString());

  function updateTime() {
    getTime(new Date().toLocaleTimeString());
  }
  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
