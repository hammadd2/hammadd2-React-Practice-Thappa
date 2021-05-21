import React from 'react';

export default function Profile(){
    
    const red=()=>{
        alert("Red function Called")
    }
    
    return(

        <div>Hello
        <h1 onClick={red}>Profile Component</h1>
        </div>
    )
}

 