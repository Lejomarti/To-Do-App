import React from "react";
import sadFace from "./sadFace.png"
import './TodosError.css'

function TodosError({ error }) {
  return (
    <div className="ErrorTodos-container">
      <img className="ErrorTodos-Imagen" src={sadFace} alt="imagen" />
      <p className="ErrorTodos-Text">{error}</p>
    </div>
  );
}
export { TodosError };
