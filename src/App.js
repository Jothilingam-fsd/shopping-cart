// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './components/Productpage.js';
import CartPage from './components/CartPage';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (productId) => {
    setCart(cart.map(item =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ProductPage cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
