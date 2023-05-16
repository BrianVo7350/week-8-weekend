import React from 'react';

const Products = ({ products, onAddToCart }) => {
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <Products key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};


