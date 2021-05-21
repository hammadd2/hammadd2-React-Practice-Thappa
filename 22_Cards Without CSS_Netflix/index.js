import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';

ReactDOM.render(
  
  <>
 {/* Create card component  with custom data , create attributes and 
 pass the data as props */}
<Card imgsrc="https://www.itl.cat/pngfile/big/27-279079_dark-netflix-wallpaper-phone.jpg" 
  sname= "Dark" 
  title="A Netflix Original Series"
  link='https://www.netflix.com/title/80100172' target='_blank'
/>
<Card imgsrc="https://images.hdqwalls.com/download/stranger-things-season-3-l7-1366x768.jpg" 
  sname= "Stranger Things" 
  title="A Netflix Original Series"
  link='https://www.netflix.com/pk/title/80057281'
/>
<Card imgsrc="https://www.kdramapal.com/wp-content/uploads/2020/02/Extracurricular-Poster-1-691x1024.jpg" 
  sname= "Extracurricular" 
  title="A Netflix Original Series"
  link='https://www.netflix.com/pk/title/80990668' target='_blank'
/>
</>
,document.getElementById('root'))
