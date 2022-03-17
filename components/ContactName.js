import React from "react";
import ContactAvatar from "./ContactAvatar";


export default function ({contact}){
    return <div style={{
        borderStyle:'solid',
        borderColor:'#fff',
        borderWidth:'1px'}}>
        <div style={{
            display:'flex',
            flexDirection:'row',
            padding:15,
            justifyContent:'flex-start',
            alignItems:'center'}}>
            <ContactAvatar contact={contact}/>
            <div style={{marginLeft:'50px', fontSize: '2em', color: '#4473d9'}}>
                {contact.name}
            </div>
        </div>
    </div>
}

// vidal

