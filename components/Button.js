import React from "react";

const Button =  function (props){
    const {onClick, text, style} = props;
    return <div className={'button'} style={{
        backgroundColor: 'red',
        padding: '20px',
        borderRadius: '17px',
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        border: '2px solid beige',
        cursor: 'pointer',
        ...style
        }} onClick={onClick}>{text}</div>
}

export default Button;
