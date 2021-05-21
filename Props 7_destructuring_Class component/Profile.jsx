import React from 'react';

class Profile extends React.Component{
    render(){
    
        const {text,data}=this.props

    return(

        <div>Hello
        
        <h1> {text}</h1>
        <h3> {data}</h3>
  
        </div>
    )
}
}

 export default Profile