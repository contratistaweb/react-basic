import React from "react";
import './TodoItem.css';
function TodoItem({ onComplete, deleteTodo, completedTodos, text}) {
  
    return (
        <li className="TodoItem">
          <span className={`Icon Icon-check ${completedTodos && 'Icon-check--active'}`} onClick={onComplete}>
            √
          </span>
          <p className={`TodoItem-p ${completedTodos && 'TodoItem-p--complete'}`}>
            {text}
          </p>
          <span className="Icon Icon-delete" onClick={deleteTodo}>
            X
          </span>
        </li>
      );
  }
  export  {TodoItem};