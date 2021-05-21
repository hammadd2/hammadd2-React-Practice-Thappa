import React from 'react';
import { Add, Sub,Divi,Mul } from './Calc';
// import Add, { Sub,Divi,Mul } from './Calc';


function App(){
   return (
    <>  
    <ol>
    <li>{Add(3,5)} </li>
    <li>{Sub(6,5)} </li>
    <li>{Divi(10,51)} </li>
    <li>{Mul(3,5)} </li>
    
    </ol>
    </>  
   )
}


export default App;