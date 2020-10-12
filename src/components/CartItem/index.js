import React from 'react';
import formatMoney from '../../utils/formatMoney.js';
import { useCartContext } from '../../context/CartProvider';
import './index.css';

const CartItem = (props) => {
  const cartContext = useCartContext();
  const { data } = props;

  const decreaseQty = () => {
    cartContext.setCartContent((prevState) => {
      const prevCart = Array.from(prevState);

      return prevCart.map((item) => {
        if (item.id === data.id) {
          if (item.qty > 1) {
            item.qty = item.qty - 1;
          }
          return item;
        } else {
          return item;
        }
      });
    });
  }

  const increaseQty = () => {
    cartContext.setCartContent((prevState) => {
      const prevCart = Array.from(prevState);

      return prevCart.map((item) => {
        if (item.id === data.id) {
          item.qty = item.qty + 1;
          return item;
        } else {
          return item;
        }
      });
    });
  }

  const removeItem = () => {
    cartContext.setCartContent((prevState) => {
      const prevCart = Array.from(prevState);
      const index = prevCart.filter((item) => item.id === data.id)[0];
      prevCart.splice(index, 1);
      return prevCart;
    });
  }

  return(
    <div className='cart-item-container'>
      <div className='img-container'>
        <img src={require(`../../assets/${data.id}.png`)} alt={data.name} />
      </div>
      <div className='info-container'>
        <p className='cart-item-name'>{data.name}</p>
        <p className='cart-item-price'>{formatMoney(data.price * data.qty)}</p>
        <div className='qty-container'>
          <button className={data.qty === 1 ? 'qty-btn disabled' : 'qty-btn'} onClick={decreaseQty}>
            <img src={require('../../assets/Minus.svg')} alt='minus' />
          </button>
          <p>{data.qty}</p>
          <button className='qty-btn' onClick={increaseQty}>
            <img src={require('../../assets/Plus.svg')} alt='plus' />
          </button>
        </div>
        <button className='remove-btn' onClick={removeItem}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;