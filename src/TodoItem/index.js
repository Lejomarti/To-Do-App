import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  // const onDelete = () => {
  //   alert("Borraste el ToDo " + props.text);
  // };

  return (
    <li className="TodoItem">
        <input
          type="checkbox"
          className={`Checkbox Icon-check ${
            props.completed && "Icon-check--active"
          }`}
          defaultChecked={props.completed} //funciona mejor cuando el codigo es 'checked={props.completed}' pero consola me muestra un error. buscar como corregirlo sin el defaultChecked
          onClick={props.onComplete}
        />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
