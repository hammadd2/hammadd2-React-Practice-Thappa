import React from 'react'
const Card=(props)=>{
    return (
    
    <div className='tc bg-light-green dib br3 pa3 ma2 grow'> 
    {/* above tc is text center */}
        <img alt='robots' src={`https://robohash.org/${props.id}?150*150`} />
       
    <div>
    <h2>{props.name} </h2>
    {/* props.name is java script expression, so needs curly braces{} */}
    <p> {props.email}</p>
    </div>
    </div>  
    )
}


export default Card