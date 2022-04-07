import React from "react";

const Button = function ({onClick, text, style}) {
    return <div className={'button'}
                testID={'button-div'}
                style={{
                    backgroundColor: 'red',
                    padding: '20px',
                    borderRadius: '17px',
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    border: '2px solid beige',
                    cursor: 'pointer', ...style
                }} onClick={onClick}>{text}</div>
}

export default Button;
