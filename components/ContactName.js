import React from "react";


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
            <div style={{
            borderColor:'black', borderStyle:'solid', backgroundColor:'black',
            borderWidth:'1px',
            width:'50px',
            height:'50px',
            borderRadius:100}
            }/>
            <div style={{marginLeft:'50px'}}>
                {contact.name}
            </div>
        </div>
    </div>
}

// vidal

