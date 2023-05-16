import React from 'react';

const SeeCart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div>
      <h2>Current Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name}{' '}
              <button onClick={() => onRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


