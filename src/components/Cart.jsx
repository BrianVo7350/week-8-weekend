import React, { useState, useEffect } from 'react';


const STRIPE_API_KEY = 'sk_test_51N5zTXLYz2wopO9ltEEsHAsZUP8hDbwgzZg984K7URS1vWLYBatX1IdxlxXNoTkr6BU6u9qHeB4KuXJ0chxBKGIg00kA2L4hqN'
const BACK_END_URL = process.env.REACT_APP_BACK_END_URL

export default function Cart({ user, product }) {

  const [cart, setCart] = useState([])

  useEffect(() => {
    getCart()
  }, [])

  const getCart = async () => {
    const token = user.apitoken
    const url = `${BACK_END_URL}/api/cart`
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
    if (data.status === 'ok') {
      setCart(data.cart)
    }
  }



  if (!cart) {
    return <p>You don't have anything in your cart</p>;
  }

  const removeFromCart = async (e, product_id) => {
    e.preventDefault()
    const token = user.apitoken
    const url = `${BACK_END_URL}/api/removeFromCart/${product_id}`
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
    if (data.status === 'ok') {
      getCart()
      console.log(data.message)
    }
  }
  const emptycart = async (e) => {
    e.preventDefault()
    const token = user.apitoken
    const url = `${BACK_END_URL}/api/emptycart`
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
    if (data.status === 'ok') {
      getCart()
      console.log(data.message)
    }
  }

  return (
    <div>
      <h1>Current Cart</h1>
      <button onClick={(e) => emptycart(e)}>Remove ALL</button>
      {cart?.map((product, index) => (
        <div key={index}>
          <h2>{product.product_name}</h2>
          <h2>{product.description}</h2>
          <button onClick={(e) => removeFromCart(e,product.id)}>Remove</button>
        </div>
      ))}
       <form action= {BACK_END_URL + "/checkout"} method="POST">
        {/* {generateInputTags()} */}
          <button className="btn btn-success">CHECKOUT</button>
        </form>
    </div>
  );
}

