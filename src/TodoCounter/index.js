import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext)
  return(
    <h2 className="TodoCounter">
        Has completado {completedTodos} de {totalTodos} ToDos
    </h2>
)
}
export { TodoCounter };
