import React from 'react';
import reactDom from 'react-dom';
// import App from './App'
import Profile from './Profile';


reactDom.render(
<>

<Profile text={{name:'Muslim Public School'}} data="School Data" />
<h1> This is Simple Index.js h1 tag, no props arround it</h1>
{/* <Profile text="Welcome to props" />
Note: you can't use two components in single return in profile.jsx,
and the reason i comment it out */}
</>
    
    ,document.getElementById('root'))
