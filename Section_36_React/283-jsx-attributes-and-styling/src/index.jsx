import React from "react";
import ReactDOM from "react-dom";


const img = "https://picsum.photos/200"

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable='true' spellCheck = 'false' >My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>

    <img className = "image" src="https://www.foodandwine.com/thmb/3kzG4PWOAgZIIfZwMBLKqoTkaGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/margherita-pizza-with-argula-and-prosciutto-FT-RECIPE0721-04368ec288a84d2e997573aca0001d98.jpg"/>
    <img className = "image" src="https://www.recipetineats.com/wp-content/uploads/2023/05/Garlic-cheese-pizza_9.jpg" />
    <img className = "image" src="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/d6c392a84e4f665424d710649452e7f9/Derivates/a6bdb196bee23faef1d8020319c7c64750ef7686.jpg" />

    <h2>Random Image</h2>
    <img src={img+"?grayscale"} alt="" />
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
