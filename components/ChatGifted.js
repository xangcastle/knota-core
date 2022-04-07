import React from "react";
import ChatSendingArea from "./ChatSendingArea";

export default function (props){
    return <div className={props.className}>
        <div className={'conversation-content'}>
            {props.children}
        </div>
        <ChatSendingArea/>
    </div>
}
