import React from 'react';

import formatMoney from '../../utils/formatMoney.js';
import { useCartContext } from '../../context/CartProvider';

const Item = (props) => {
  const { data } = props;
  const cartContext = useCartContext();

  const handleClick = () => {
    cartContext.addToCart(data);
  }

  return(
    <div>
      <img src={require(`../../assets/${data.id}.png`)} alt={data.name} />
      <p>{data.name}</p>
      <p>{formatMoney(data.price)}</p>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}

export default Item;