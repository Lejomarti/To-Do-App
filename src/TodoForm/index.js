import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
    //mini estado que mas a delante envia la info al estado global por medio de addTodo
  const [newTodoValue, setNewTodoValue] = React.useState("");

  //addTodo viene de nuestro contexto
  const { 
    addTodo,
    setOpenModal,
 } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false)
  };

  //on submit ejecuta a addTodo y le envia la info al estado global.
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false)
  };

  return (
    //El form tienen un evento onsubmit. en este caso al ejecutarse el submit va a llamar al onSubmit
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe una tarea"
      />

      <div className="TodoForm-buttonContainer">
        <button type="button" onClick={onCancel} className="TodoForm-button TodoForm-button--cancel">
          Cancelar
        </button>

        <button type="submit" className="TodoForm-button TodoForm-button--add">Add</button>
      </div>
    </form>
  );
}

export { TodoForm };
