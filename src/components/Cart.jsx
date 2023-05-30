import React, {useState, useEffect} from 'react';
import Products from './Products'

const STRIPE_API_KEY = 'sk_test_51N5zTXLYz2wopO9ltEEsHAsZUP8hDbwgzZg984K7URS1vWLYBatX1IdxlxXNoTkr6BU6u9qHeB4KuXJ0chxBKGIg00kA2L4hqN'
const BACK_END_URL = process.env.REACT_APP_BACK_END_URL

export default function Cart({ products, setCart, removeFromCart, removeFromCartAll }) {
  if (!products) {
    return <p>You don't have anything in your cart</p>;
  }

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };
  
// This does not work fix it psuedo code
  const handleRemoveAll = (productId) => {
    removeFromCartAll(setCart)
  };



  
  return (
    <div>
      <h1>Current Cart</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <h2>{product.description}</h2>
          <button onClick={() => handleRemove(product.id)}>Remove</button>
          <button onClick={() => handleRemoveAll(product.id)}>Remove</button>
        </div>
      ))}
      <form action={BACK_END_URL+ '/checkout'} method='POST'>
        <button type="submit">
          Checkout
        </button>
      </form>
    </div>
  );
}


