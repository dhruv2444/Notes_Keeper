import React, { useState } from "react";

function CreateArea(props) {
  const [textarea, setTextarea] = useState({
    title: "",
    content: "",
  });

  function handleTextArea(event) {
    const { name, value } = event.target;
    setTextarea((prevVal) => {
      const updatedVal = { ...prevVal, [name]: value };
      console.log(updatedVal);
      return updatedVal;
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleTextArea}
          name="title"
          placeholder="Title"
          value={textarea.title}
          required
          />
        <textarea
          onChange={handleTextArea}
          value={textarea.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
          required
        />
        <button
          onClick={(event) => {
            event.preventDefault(); // Prevent page reload
            props.handleClick(textarea); // Send the note
            setTextarea({ title: "", content: "" }); // Opt
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
