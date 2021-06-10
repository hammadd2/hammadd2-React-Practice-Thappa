import React,{useState} from 'react';
import Parent from './Parent'


function App(){ 
         let [number, setNumber] = useState(45);
    
    return (
    <div>
    Hello World
    <Parent num={number}></Parent>
    <button onClick={()=>{setNumber(++number )}}>Click me</button>
    </div>
);
}

export default App