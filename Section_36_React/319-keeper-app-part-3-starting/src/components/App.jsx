import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {useState} from "react";

function App() {
  const [addedNote, setAddedNote] = useState([])

  function addNote(note){
    setAddedNote(prevNote => [...prevNote, note])
  }

  function deleteNote(id){
    setAddedNote(prevNote => {
      return prevNote.filter((noteItem, index) => {
        return index !== id
      })
    })}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/> 
      { addedNote.map((noteItem, index) => (
        <Note
          onDelete={deleteNote}
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      

      <Footer />
    </div>
  );
}

export default App;
