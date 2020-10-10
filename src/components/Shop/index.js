import React, { useState } from 'react';
import Item from '../Item';

import * as weapons from '../../data/weapons.json';

const Shop = () => {
  const weaponsList = [...weapons.items];
  // const [cartContent, setCartContent] = useState([]);

  // const addToCart = (item) => {
  //   if (cartContent.some((cartItem) => cartItem.id === item.id)) {
  //     console.log('Item already in cart. Adding extra');
  //     console.log(cartContent);
  //     setCartContent((prevState) => prevState.map(
  //       cartItem => cartItem.id === item.id ? { ...cartItem, qty: cartItem.qty + 1}: cartItem
  //     ));
  //     console.log(cartContent);
  //   } else {
  //     console.log('First of the item in the cart.');
  //     console.log(cartContent);
  //     setCartContent((prevState) => [
  //       ...prevState, 
  //       {
  //         ...item,
  //         qty: 1
  //     }]);
  //     console.log(cartContent);
  //   }
  // }

  return(
    <div>
      <h1>Our Shop</h1>
      <div>
        {weaponsList.map((item, index) => 
          <Item data={item} key={index} />
        )}
      </div>
      <div>
        <p>All sales are final.</p>
      </div>
    </div>

  );
}

export default Shop;