import React from "react";
import Login from "./Login";


var isLoggedIn = false;
var currentTime = new Date(2014, 11, 12, 11).getHours()
function App() {
  return (
    <div className="container"> 
    {isLoggedIn ? <h1>Hello</h1> : <Login />}
    {currentTime>12 && <h1>What are you doing here?</h1>}
    
    </div>
  );
}

export default App;
