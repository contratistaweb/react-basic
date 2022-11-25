import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal}) {
    const onClickButton = () => {
        setOpenModal(true);
      };
      
      return (
        <button
          className="CreateTodoButton"
          onClick={onClickButton}
        >
          +
        </button>
      );
}

export { CreateTodoButton };