import React from "react";
import Button from "./Button";
import ChatTextMaker from "./ChatTextMaker";

export default function (props){
    return <div className={'ChatSendingArea'}>
        <Button text={'+'} style={{
            border: 'none',
            backgroundColor: 'orange',
            padding: '10px',
        }} onClick={()=>alert('otra cosa')} />
        <ChatTextMaker />
        <Button text={'enviar'} onClick={()=>alert('algo')} />
    </div>
}
