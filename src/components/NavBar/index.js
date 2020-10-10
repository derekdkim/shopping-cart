import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Shop'>Shop</Link></li>
        <li><Link to='/Cart'>Cart</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;