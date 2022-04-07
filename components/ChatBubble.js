import React from "react";

export default function ({message}){
    return <div className={`message message-${message.side}`}>
        <div className={'message-text'}>{message.content}</div>
        <div className={'message-info'}>
            <span>{message.name}</span>
            <span>{message.time.toLocaleTimeString()}</span>
        </div>
    </div>
}
