import React from "react";
import ChatSendingArea from "./ChatSendingArea";
import ChatBubble from "./ChatBubble";
import ChatTime from "./ChatTime";

export default function (props){
    return <div className={props.className}>
        <div>
            <ChatTime/>
            <ChatBubble/>
            <ChatTime/>
            <ChatBubble/>
            <ChatTime/>
            <ChatBubble/>
            <ChatTime/>
            <ChatBubble/>
            <ChatTime/>
        </div>
        <ChatSendingArea/>
    </div>
}