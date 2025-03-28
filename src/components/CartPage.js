// src/components/CartPage.js
import React from 'react';

const CartPage = ({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalPrice = calculateTotal();
  const discountedPrice = totalPrice * 0.9;

  return (
    <div className="p-4">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="border-b py-4">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => increaseQuantity(item.id)} className="bg-green-500 text-white p-2">+</button>
            <button onClick={() => decreaseQuantity(item.id)} className="bg-yellow-500 text-white p-2">-</button>
            <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white p-2">Remove</button>
          </div>
        ))
      )}
      <div className="mt-4">
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <p>Discounted Price: ${discountedPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;

