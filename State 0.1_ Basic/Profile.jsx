import React from 'react'
class Profile extends React.Component
{
    constructor(){
       super();
       this.state={
           name:"Meerab",
           email:"hammadd2@yahoo.com"
       }
    }
    render(){
    return(
        <div>
        <h1>Hello {this.state.name}</h1>
        <h2>Email address {this.state.email}</h2>
        </div>


    )
}

}

export default Profile