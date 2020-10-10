import React from 'react';
import formatMoney from '../../utils/formatMoney.js';
import { useCartContext } from '../../context/CartProvider';

const Cart = () => {
  const cartContext = useCartContext();

  const calculateTotal = () => {
    const subTotal = cartContext.cartContent.map((item) => item.price * item.qty);
    return subTotal.reduce((total, current) => total + current);
  }

  return(
    <div>
      {
        cartContext.cartContent.length > 0
        ? <div>
            <div>
              {
                cartContext.cartContent.map((item, index) => 
                  <div key={index}>
                    <p>{item.name}</p>
                    <p>{formatMoney(item.price)}</p>
                    <p>{item.qty}</p>
                  </div>
                )
              }
            </div>
            <div>
              <p>{formatMoney(calculateTotal())}</p>
            </div>
          </div>
        : <div>Your Cart is Empty</div>
      }
    </div>
  );
}

export default Cart;