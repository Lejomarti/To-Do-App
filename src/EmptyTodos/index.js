import React from "react";
import imagen from './empty.png'
import "./EmptyTodos.css"

function EmptyTodos() {
    return (
        <div className="EmptyTodos-container">
        <img className="EmptyTodos-Imagen" src={imagen} alt="imagen" />
        <p className="EmptyTodos-Text">No hay TODOs</p>
        </div>
    )
}
export {EmptyTodos}