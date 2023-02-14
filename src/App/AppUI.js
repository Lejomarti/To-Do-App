import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
// import "./App.css";

function AppUI( {
  error, 
  loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo
} 
){
    return (    <React.Fragment>
        <TodoCounter total={totalTodos} completed={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {error && <p>Hubo un error.... NOOOOO</p>}
          {loading && <p>Estamos cargando</p>}
          {(!loading && !searchedTodos.length)&&<p>Crea tu primer ToDo</p>}


          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toggleCompleteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </React.Fragment>);
}

export { AppUI }
