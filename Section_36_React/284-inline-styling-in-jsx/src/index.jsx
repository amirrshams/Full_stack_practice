import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
    color : "violet",
    backgroundColor: "cyan",
    border: "1px solid black",
    fontSize: "2em",
    fontStyle: "normal"
}

customStyle.backgroundColor = "pink"
ReactDOM.render(
    <div style={customStyle}> 
        <h1>Hello World!</h1>
        <p style={{color: "black"}}>We want to change styles</p>
        <p style={{fontStyle:"oblique"}} >What about this one?</p>
    </div>
, document.getElementById("root"));

