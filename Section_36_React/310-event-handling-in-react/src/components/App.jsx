import React, { useState } from "react";



function App() {


  const [headingText, setHeadingText] = useState("Hello")

  const [isMouseOver, setMouseOver] = useState(false)

  function handleClick(){
    setHeadingText("Submitted")
  }

  function handleMouseHover(){
    setMouseOver(true);
  }
  function handleMouseOut(){
    setMouseOver(false)
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: isMouseOver ? "black" : "white"}} onClick={handleClick} onMouseOver={handleMouseHover} onMouseOut={handleMouseOut} >Submit</button>
    </div>
  );
}

export default App;
