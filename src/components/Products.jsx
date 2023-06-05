import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


const STRIPE_API_KEY = 'sk_test_51N5zTXLYz2wopO9ltEEsHAsZUP8hDbwgzZg984K7URS1vWLYBatX1IdxlxXNoTkr6BU6u9qHeB4KuXJ0chxBKGIg00kA2L4hqN'
const BACK_END_URL = process.env.REACT_APP_BACK_END_URL

const ProductCard = ({ user, productInfo }) => {
  const p = productInfo;

  const addToCart = async (e) => {
    e.preventDefault()
    const url = `http://127.0.0.1:5000/api/addToCart/${p.id}`;
    const options = {
      method : "POST",
      headers : {
      Authorization : `Bearer ${user.apitoken}`
      }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    if (data.status == 'ok'){
      console.log(data.message)
    }
  }


  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{p.name}</h5>
        <p className="card-text">{p.description}</p>
        <button className="btn btn-primary" onClick={(e) => { addToCart(e) }}>Add to Cart</button>
        <Link className="Singleproduct" aria-current="page" to={`/Singleproduct/${p.id}`}>INFO</Link>
      </div>
    </div>
  );
};

export default function Products({user}) {
  const [product, setProducts] = useState([])

  useEffect(() =>{
    getProducts()
  }, [])

  const getProducts = async () => {
    const url = 'http://127.0.0.1:5000/api/showProducts';
    const options = {
      method : 'GET',
      headers : {
      Authorization : `Bearer ${user.apitoken}`
      }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    if (res.status===200){
      setProducts(data.products)
    }
  };

  const showProducts = () => {
    return product?.map((p) => (
      <ProductCard productInfo={p} key={p.id} user={user} />
    ));
  };

  return (
    <div>
      <h1>Product Page</h1>
      <div className="container">
        <div className="row">
          {showProducts()}
            <form action= {BACK_END_URL + "/checkout"} method="POST">
            <button className="btn btn-success">CHECKOUT</button>
            </form>
        </div>
      </div>
    </div>
    
  )
};








