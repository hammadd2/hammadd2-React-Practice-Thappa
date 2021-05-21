import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css'
import Sdata from "./Sdata";
// console.log(Sdata[0].sname);

  
function ncard(val) {
  return (
<Card
  key={val.id} 
  imgsrc={val.imgsrc}
  sname= {val.sname}
  title={val.title}
  link={val.link}
/>

);
}

ReactDOM.render(

<>
<h1 className="heading">List of Top Netflix Series in 2020</h1>

{Sdata.map(ncard)}

</>
,document.getElementById('root')
);
