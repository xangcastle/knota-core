import React from "react";
import Button from "./Button";
import ChatTextMaker from "./ChatTextMaker";

export default function (props){
    return <div className={'ChatSendingArea'}>
        <Button className={'sendButton'} />
        <ChatTextMaker />
        <Button className={'additionaOptionsButton'} text={'enviar'} onClick={()=>alert('algo')} />
    </div>
}
