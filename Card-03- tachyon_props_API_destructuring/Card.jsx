import React from 'react'

const Card=(props)=>{
    const {name,email,id}=props // desctructuring
    return (
    
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'> 
    <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
   // removed propes.id    
    <div>
    <h2>{name} </h2>  //Due to restructuring remove propes.name..
    <p> {email}</p>
    </div>
    </div>  
    )
}


export default Card
