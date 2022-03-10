import React from "react";
import Button from "./Button";
import ChatTextMaker from "./ChatTextMaker";

export default function (props){
    return <div>
        <Button className={'sendButton'} />
        <ChatTextMaker className={'chatTextMaker'} />
        <Button className={'additionaOptionsButton'} text={'enviar'} onClick={()=>alert('algo')} />
    </div>
}
