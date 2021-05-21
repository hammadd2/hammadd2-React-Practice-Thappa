Solution Console give Uniue key error:

1) Added id: 1 etc in "Sdata.jsx"

{       id: 6,
        sname: "Stranger Things", 
        imgsrc:"https://images.hdqwalls.com/download/stranger-things-season-3-l7-1366x768.jpg" ,
        title:"A Netflix Original Series",
        link:'https://www.netflix.com/pk/title/80057281',
    },
    
2) added line in "index.js":   key={val.id} 

<Card
  key={val.id} 
  imgsrc={val.imgsrc}
  sname= {val.sname}
  title={val.title}
  link={val.link}
/>

----------------------------------------

Error in React developer tools
     
     
