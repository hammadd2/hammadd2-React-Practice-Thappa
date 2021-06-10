import React, { createContext } from 'react';
import A from './A'

const FirstName=createContext()
function App(){
    return(
        <div>
        <FirstName.Provider value={"Hammad Ali Mir"}>
           <A />
        </FirstName.Provider>
         
        </div>
    )
}

export default App
export {FirstName}