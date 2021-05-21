import React from 'react';
import ReactDOM from 'react-dom';

class MyFirstReactComponent extends React.Component {
   render() {
       const cityArray = ["Karachi", "Lahore", "Peshawer", "Quetta","Islamabad"]

       return (
           <ul>
               {
                   cityArray.map((city) => <li key={city}> {city} </li>)
               }
           </ul>
       )}
}

ReactDOM.render(
   <MyFirstReactComponent />,
   document.getElementById('root')
);
// Note below code can also be used as replacement inside return.
//  cityArray.map((city) => <li> {city} </li>
// cityArray.map((city) => city)