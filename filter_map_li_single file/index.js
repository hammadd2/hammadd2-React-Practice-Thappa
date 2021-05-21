
import React from 'react';
import ReactDOM from 'react-dom';

class MyFirstReactComponent extends React.Component {
   render() {
    const cityArray = ["Karachi", "Lahore", "Peshawar", "Quetta","Islamabad"]
    const shortListedCities = cityArray.filter((city)=>city.length>7)
    
       return (
           <ul>
               {
                shortListedCities.map(city => <li key={city}> {city} </li>)
               }
           </ul>
       )}
}

ReactDOM.render(
   <MyFirstReactComponent />,
   document.getElementById('root')
);
