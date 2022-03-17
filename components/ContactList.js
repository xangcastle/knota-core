import React from 'react';
import ContactAvatar from "./ContactAvatar";
import ContactName from "./ContactName";

export default function (props) {
    const contacts = [
        {
            name: "Oscar Marin",
            number: "",
        },
        {
            name: "Cesar Ramirez",
            number: "",
        },
        {
            name: "Marcelo Obando",
            number: "",
        },
        {
            name: "Mario Robles",
            number: "",
        },
    ];
    
    const renderContacts = () => {
        return contacts.map(contact => <div className={'contact'}>
            <ContactAvatar contact={contact}/>
            <ContactName contact={contact}/>
        </div>)
    }
    
    return <div className={props.className}>{renderContacts()}</div>
}