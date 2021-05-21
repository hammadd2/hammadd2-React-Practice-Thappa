import React from 'react';

function Profile(props_here){
    
    return(

        <div>Hello
        
        <h1> {props_here.text.name}</h1>
        <h3> {props_here.data}</h3>
        {/* <h1> {props_here.text}</h1>
Note: You can't insert two components, thats
reason i commented out, otherwise will give here */}
        </div>
    )
}

 export default Profile