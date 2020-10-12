import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

const Home = () => {
  const history = useHistory();

  const goToShop = () => {
    history.push('/shopping-cart/shop');
  }

  return(
    <div className='home-container'>
      <h1>Ye Olde Weapon Shop</h1>
      <p>Welcome adventurers!</p>
      <p>We have the finest weapons to prepare you for your next quest!</p>
      <button className='shop-btn' onClick={goToShop}>Shop Now</button>
    </div>
  );
}

export default Home;