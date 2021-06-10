import React, { createContext } from 'react';
import A from './A'

const FirstName=createContext()
const LastName=createContext()
function App(){
    return(
        <>
        <FirstName.Provider value={"Hammad"}>
        <LastName.Provider value={"Ali"}>
           <A />
        </LastName.Provider>    
        </FirstName.Provider>
         
        </>
    )
}

export default App
export {FirstName, LastName}