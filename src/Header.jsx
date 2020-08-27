import React from 'react';
import logo from "./logo192.png"


const Header = () => {

  //javasvript zone
 
  return (
    <header style={{display: `flex`}}>
      <img src={logo} alt="logo" style={{width:"122px"}}/>
        <h1>learn</h1>
    </header>
  );
}

export default Header;
