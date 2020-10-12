import React from 'react';
import Item from '../Item';
import './index.css';
import * as weapons from '../../data/weapons.json';

const Shop = () => {
  const weaponsList = [...weapons.items];

  return(
    <div className='shop-container'>
      <h1>Our Current Offerings</h1>
      <div className='shop-grid'>
        {weaponsList.map((item, index) => 
          <Item data={item} key={index} />
        )}
      </div>
      <div className='disclaimer'>
        <p>All sales are final.</p>
      </div>
    </div>

  );
}

export default Shop;