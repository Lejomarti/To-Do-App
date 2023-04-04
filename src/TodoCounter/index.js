import React from "react";
import "./TodoCounter.css";

const estilos = {
  color: "red",
  backgroundColor: "yellow", //lo que antes era background-color. aca es backgroundColor
};

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoSearch--loading"}`}>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
}

export { TodoCounter };
