import React from 'react';
import './TodoIcon.css';

const contentIcon = {
    IconCheck:"ᄼ",
    IconDelete:"X",
}

const claseIcon = {
    IconCheck:"Icon Icon-check",
    IconDelete:"Icon Icon-delete",
}

function TodoIcon ({icon, clickAction, addClase}) {
    return(
      <span  
                className={`${claseIcon[icon]} ${addClase || ""}`}
                onClick={clickAction}
            >
            {contentIcon[icon]}
            </span>
    )
}

export  {TodoIcon}