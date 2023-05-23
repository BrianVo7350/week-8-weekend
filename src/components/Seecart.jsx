import React from 'react';

export default function SeeCart({ products, removeFromCart }) {
  if (!products) {
    return <p>You don't have anything in your cart</p>;
  }

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div>
      <h1>Cart</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button onClick={() => handleRemove(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}


