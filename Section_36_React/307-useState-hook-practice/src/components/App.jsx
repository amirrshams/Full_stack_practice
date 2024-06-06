import React from "react";

function App() {

  
  const [time, setTime] = React.useState(new Date().toLocaleTimeString())


  function showTime(){
    const curTime = new Date().toLocaleTimeString();
    setTime(curTime)
  }

  setInterval(showTime, 1000)
  

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
