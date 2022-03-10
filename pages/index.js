import React, {useState, Fragment} from 'react';
import ContactList from "../components/ContactList";
import ChatGifted from "../components/ChatGifted";

function HomePage(){
    const [counter, setCounter] = useState(0);

    return <Fragment>
        <ContactList className="contactList"/>
        <ChatGifted className="chatGifted"/>
    </Fragment>
}

export default HomePage