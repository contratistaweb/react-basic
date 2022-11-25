import React from "react";
import './TodoCounter.css';

function TodoCounter({completed, total}) {
  return(
    <h2 className="TodoCounter">
        Has complentado {completed} de {total} ToDos
    </h2>
)
}
export { TodoCounter };
