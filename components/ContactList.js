import React from 'react';
import ContactAvatar from "./ContactAvatar";
import ContactName from "./ContactName";

export default function (props) {
    const contacts = [
        {
            name: "Contact 1",
            number: "",
        },
        {
            name: "Contact 2",
            number: "",
        },
        {
            name: "Contact 3",
            number: "",
        },
        {
            name: "Contact 4",
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