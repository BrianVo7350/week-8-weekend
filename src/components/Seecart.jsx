import React from 'react';

export default function SeeCart({ products, removeFromCart }) {
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
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


