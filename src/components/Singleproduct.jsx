import React from 'react'
import Products from './Products';

export default function Singleproduct() {
  const ProductCard = ({ productInfo, addToCart }) => {
    const p = productInfo

    return (
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{p.name}</h5>
          <p className="card-text">{p.description}</p>
          <button className="btn btn-primary" onClick={() => { addToCart(p) }}>Add to Cart</button>
        </div>
      </div>
    )
  };
 
}
