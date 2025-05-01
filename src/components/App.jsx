import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function handleClick(text) {
    setNotes((prevNotes) => {
      const updatedVal = [...prevNotes, text];
      console.log(updatedVal);
      return updatedVal;
    });
  }

  function handleDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleClick={handleClick} />
      {notes.map((note, index) => {
        return (
          <Note
            handleDelete={handleDelete}
            key={index}
            id={index}
            title={note.title}
            content={note.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
