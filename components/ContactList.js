import React from 'react';
import ContactAvatar from "./ContactAvatar";
import ContactName from "./ContactName";

export default function (props) {
    const contacts = [
        {
            name: "Oscar marin Robleto",
            number: "",
        },
        {
            name: "Cesar Abel",
            number: "",
        },
        {
            name: "Michael",
            number: "",
        },
        {
            name: "Vidal Vaquedano",
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