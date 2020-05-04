import React from "react";
import "./pages.scss";

export default function details(props) {
  return (
    <div className="details">
      <h1>Notes : {props.note[props.noteId]}</h1>
    </div>
  );
}
