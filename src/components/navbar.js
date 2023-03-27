import React from 'react';
import logo from './../img/pngegg.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo_container">
        <img src={logo} alt="troll logo" className="logo_img"></img>
        <h1>Meme Generator</h1>
      </div>
    </div>
  );
}
