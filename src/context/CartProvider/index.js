import React, { useState } from 'react';
import CartContext from '../CartContext';

const CartProvider = ( { children } ) => {
  const [cartContent, setCartContent] = useState([]);

  const addToCart = (item) => {
    if (cartContent.some((cartItem) => cartItem.id === item.id)) {
      setCartContent((prevState) => prevState.map(
        cartItem => cartItem.id === item.id ? { ...cartItem, qty: cartItem.qty + 1}: cartItem
      ));
    } else {
      setCartContent((prevState) => [
        ...prevState, 
        {
          ...item,
          qty: 1
      }]);
    }
  }

  return(
    <CartContext.Provider
      value={{
        cartContent: cartContent,
        setCartContent: setCartContent,
        addToCart: addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const useCartContext = () => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context
}

export { CartProvider, useCartContext };