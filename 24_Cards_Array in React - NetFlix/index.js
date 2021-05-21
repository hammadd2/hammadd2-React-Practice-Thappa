import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css'
import Sdata from "./Sdata"
// console.log(Sdata[0].sname);


ReactDOM.render(
  
  <>
<h1 className="heading">List of Top Netflix Series in 2020</h1>

<Card imgsrc={Sdata[0].imgsrc}
  sname= {Sdata[0].sname}
  title={Sdata[0].title}
  link={Sdata[0].link}
/>
<Card imgsrc={Sdata[1].imgsrc}
  sname= {Sdata[1].sname}
  title={Sdata[1].title}
  link={Sdata[1].link}
/>
<Card imgsrc={Sdata[2].imgsrc}
  sname= {Sdata[2].sname}
  title={Sdata[2].title}
  link={Sdata[2].link}
/>

</>
,document.getElementById('root'))
