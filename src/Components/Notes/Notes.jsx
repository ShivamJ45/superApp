import React from "react";
import { useState } from "react";
import "./Notes.css"

const Notes = () => {
  const [notes, setNotes] = useState("");

  const handleChange = (event) => {
    setNotes(event.target.value)
    localStorage.setItem("notesData",JSON.stringify(notes))
  }  

  return (
    <div className="notesMainDiv">
      <p>All notes</p>
      <textarea
        placeholder="Start typing here ..."
        cols={30}
        rows={10}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Notes;
