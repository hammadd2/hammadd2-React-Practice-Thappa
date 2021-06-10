import React from 'react';
import {FirstName} from './App'
const C=()=>{
    return(
        <>
        <FirstName.Consumer>
        {(fname)=>{
            return <h1>My Name is {fname}</h1>
                
        }}
        </FirstName.Consumer>
       </>
    )
}
export default C
