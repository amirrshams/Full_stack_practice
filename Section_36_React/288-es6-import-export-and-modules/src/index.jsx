import React from "react";
import ReactDOM from "react-dom";
import * as mt from "./math"
ReactDOM.render(
  <ul>
    <li>{mt.default}</li>
    <li>{mt.double(2)}</li>
    <li>{mt.triple(3)}</li>
  </ul>,
  document.getElementById("root")
);

