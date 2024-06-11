import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event){
    const newValue = event.target.value;
    setContact(prevValue => {
      if(event.target.name === "fName"){
        return{
          fName: newValue,
          lName: prevValue.lName,
          email: prevValue.email
        }
      } else if (event.target.name === "lName"){
        return{
          fName: prevValue.fName,
          lName: newValue,
          email: prevValue.email
        }
      } else if (event.target.name === "email"){
        return{
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: newValue
        }
      }
      });
    }



  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" value={contact.fName} onChange={handleChange} />
        <input name="lName" placeholder="Last Name" value={contact.lName} onChange={handleChange}/>
        <input name="email" placeholder="Email" value={contact.email} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
