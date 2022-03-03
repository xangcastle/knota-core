import React from 'react';


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
        return contacts.map(contact => <div className={'contact'}>{contact.name}</div>)
    }
    
    return renderContacts()
}