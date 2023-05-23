import React, {useEffect, useState} from 'react'

const STRIPE_API_KEY = 'sk_test_51N5zTXLYz2wopO9ltEEsHAsZUP8hDbwgzZg984K7URS1vWLYBatX1IdxlxXNoTkr6BU6u9qHeB4KuXJ0chxBKGIg00kA2L4hqN'
const BACK_END_URL = process.env.REACT_APP_BACK_END_URL

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
}


export default function Products() {
  const [products, setProducts] = useState([])
  const [user, setUser] = useState({})
  const [cart, setCart] = useState({size:0})

  const addToCart = (item) => {
    const copy = {...cart}
    if (item.id in copy){
      copy[item.id].qty++
    }
    else {
      copy[item.id] = item;
      copy[item.id].qty = 1
    }
    copy.size++;
    setCart(copy);
  }

  useEffect(() =>{
    getProducts()
  }, [])

  const getProducts = async () => {
    const url = 'https://api.stripe.com/v1/products';
    const options = {
      method : 'GET',
      headers : {
      Authorization : `Bearer ${STRIPE_API_KEY}`
      }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    if (res.status===200){
      setProducts(data.data)
    }
  };

  const showProducts = () => {
    return products.map(p => <ProductCard productInfo={p} key={p.id} addToCart={addToCart}/>)
  }

  return (
    <div>
      <h1>Product Page</h1>
      <div ClassName="container">
        <div ClassName="row">
          {showProducts()}
        </div>
      </div>
    </div>
  )
}




