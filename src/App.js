import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Routes from './components/Routes';
import { CartProvider } from './context/CartProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <CartProvider>
          <Routes />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
