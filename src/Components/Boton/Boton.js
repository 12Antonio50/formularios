import React from "react";

const Principalbtn = ({ text, id, onClick, nameClass }) => {
    return (
        <button
        className={nameClass}
        id={id}
        onClick={() => { 
            onClick() }}
    >
        {text}
    </button>
    );
}

export default Principalbtn;