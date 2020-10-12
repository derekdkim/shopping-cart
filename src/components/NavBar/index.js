import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const NavBar = () => {
  return (
    <nav>
      <p>Ye Olde Weapon Shop</p>
      <div></div>
      <div className='link-container'>
        <Link to='/'>Home</Link>
      </div>
      <div className='link-container'>
        <Link to='/Shop'>Shop</Link>
      </div>
      <div className='link-container'>
        <Link to='/Cart'>Cart</Link>
      </div>
    </nav>
  );
}

export default NavBar;