import React from 'react';
import formatMoney from '../../utils/formatMoney.js';
import { useCartContext } from '../../context/CartProvider';
import CartItem from '../CartItem';
import './index.css';

const Cart = () => {
  const cartContext = useCartContext();

  const calculateTotal = () => {
    const subTotal = cartContext.cartContent.map((item) => item.price * item.qty);
    return subTotal.reduce((total, current) => total + current);
  }

  return(
    <div className='cart-page'>
      {
        cartContext.cartContent.length > 0
        ? <div className='cart-container'>
            <div>
              {
                cartContext.cartContent.map((item, index) => 
                  <CartItem key={index} data={item} />
                )
              }
            </div>
            <div className='total-container'>
              <p>{`Your Total: ${formatMoney(calculateTotal())}`}</p>
              <button>Check Out</button>
            </div>
          </div>
        : <div className='cart-empty'>Your Cart is Empty</div>
      }
    </div>
  );
}

export default Cart;