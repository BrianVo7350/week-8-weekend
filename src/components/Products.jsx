import React from 'react';

export default function Products({ products, onAddToCart }) {
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }



  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <Products key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

const product1 = {
  id : 1,
  name : 'iphone',
  price : 1000
};