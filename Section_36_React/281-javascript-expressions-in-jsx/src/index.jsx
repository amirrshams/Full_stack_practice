import React from "react";
import ReactDOM from "react-dom";

const fname = "Amirreza";
const lname = "Shams";
const num = 22;
ReactDOM.render(
    <div>
        <h1>Hello {fname} {lname}!</h1>
        <p>My lucky number is {num} </p>
    </div>
, document.getElementById("root"));
