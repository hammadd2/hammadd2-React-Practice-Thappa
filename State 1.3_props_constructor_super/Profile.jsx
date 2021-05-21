import React from 'react'

class Profile extends React.Component{
   constructor(props){
       super(props);
       this.state={
            name: "Sehrish",
            roll:this.props.roll
       }

   }

    
    render(){
        return(
        <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.roll}</h1>          
        </div>
        )
    
}}


export default Profile