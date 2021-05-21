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
    updateState()
    {
        this.setState({
            name:'Shiraz'
        })

    }
    render(){
    return(
        <div>
        <h1>Hello {this.state.name}</h1>
        <h2>Email address {this.state.email}</h2>
        <button onClick={()=>{this.updateState()}
        }>Update</button>
        </div>


    )
}

}

export default Profile