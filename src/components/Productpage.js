// src/components/ProductPage.js
import React, { useState, useEffect } from 'react';

const ProductPage = ({ cart, addToCart, removeFromCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => {
        const isInCart = cart.some(item => item.id === product.id);
        return (
          <div key={product.id} className="border p-4 rounded-lg">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button
              onClick={() => isInCart ? removeFromCart(product.id) : addToCart(product)}
              className={`bg-blue-500 text-white p-2 mt-2 ${isInCart ? 'bg-red-500' : 'bg-blue-500'}`}
            >
              {isInCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductPage;

