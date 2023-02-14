import React from "react";
import './TodoCounter.css';

const estilos = {
  color: "red",
  backgroundColor: "yellow", //lo que antes era background-color. aca es backgroundColor
};

function TodoCounter({total, completed}) {
  return <h2 className='TodoCounter'>Has completado {completed} de {total} TODOs</h2>;
}

export { TodoCounter };
