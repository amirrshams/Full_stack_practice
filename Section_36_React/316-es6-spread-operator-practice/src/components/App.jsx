import React, {useState} from "react";


function App() {
  

  const [item, setItem] = useState("");
  const [addedItem, setAddedItem] = useState([]);


  function handleChange(event){

    const value = event.target.value;
    setItem(value)
  }
  function handleSubmit(event){
    setAddedItem(prevItems => [...prevItems, item])
    setItem("")
  }




  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
        type="text"
        value={item}
        onChange={handleChange}
         />
        <button
        onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{addedItem.map((item) => (
            <li>{item}</li>
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
