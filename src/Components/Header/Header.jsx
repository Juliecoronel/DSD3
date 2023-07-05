import React from 'react';
import './header.css'
const Header = () => {
  return (
    <header className="header">
      <h1 className="h1">Digital Respect</h1>
      <ul className='links'>
        <li className='btn'><a href="#">Educa</a></li>
        <li className='btn'><a href="#">Testimonios</a></li>
        <li className='btn'><a href="#">Denuncia</a></li>
      </ul>
    </header>
  );
};
export default Header