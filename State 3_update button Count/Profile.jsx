import React from 'react'
class Profile extends React.Component
{
    constructor(){
       super();
       this.state={
           name:"Meerab",
           email:"hammadd2@yahoo.com",
           count:0

       }
    
    }
    updateState()
    {
        this.setState({
            name:'Shiraz',
            count:this.state.count+1
        })

    }
    render(){
    return(
        <div>
        <h1>Hello {this.state.name}</h1>
        <h3>Count{this.state.count}</h3>
        <h2>Email address {this.state.email}</h2>
        <button onClick={()=>{this.updateState()}
        }>Update</button>
        </div>


    )
}

}

export default Profile
