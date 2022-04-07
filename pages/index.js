import React, {useState, Fragment} from 'react';
import ContactList from "../components/ContactList";
import ChatGifted from "../components/ChatGifted";
import ChatBubble from "../components/ChatBubble";
import {displayObject} from "../utils";

function HomePage(){
    const [counter, setCounter] = useState(0);

    const obj = {
        name: 'abel',
    }

    const conversacion = {
        contact: {
            id: 1,
            name: 'Guillermo',
            avatar: '',
        },
        messages: [
            {
                time: new Date(),
                content: 'Texto del mensaje',
                side: 'left',
            },
            {
                time: new Date(),
                content: 'Texto del mensaje',
                side: 'right',
            },
            {
                time: new Date(),
                content: 'Texto del mensaje',
                side: 'right',
            },
            {
                time: new Date(),
                content: 'Texto del mensaje',
                side: 'left',
            },
            {
                time: new Date(),
                content: 'Texto del mensaje',
                side: 'right',
            },
        ]
    };

    const messages = conversacion.messages.map(message => {
        return {...message, ...conversacion.contact}
    })

    return <Fragment>
        <ContactList className="contactList"/>
        <ChatGifted className="chatGifted">
            {messages.map(msj => {
                return <ChatBubble message={msj}/>
            })}
        </ChatGifted>
    </Fragment>
}

export default HomePage
