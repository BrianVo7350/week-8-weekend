import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const BACK_END_URL = process.env.REACT_APP_BACK_END_URL

export default function Singleproduct( {addToCart} ) {
  const [products, setProducts] = useState([])
  // const [cart, setCart] = useState([])


  const Singleproduct = async () => {
    const res = await fetch(`${BACK_END_URL}/api/Singleproduct/${product_id}`, {method:"GET"})
    const data = await res.json()
    console.log(data)
    if (data.status === 'ok'){
      setProducts(data.product)
    }
  }

  const {product_id} = useParams() 

  useEffect(() => {
    Singleproduct();
  }, []);

  const ProductCard = ({ productInfo, addToCart }) => {
    const p = productInfo
    return (
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{p.product_name}</h5>
          <p className="card-text">{p.description}</p>
          <button className="btn btn-primary" onClick={() =>  {addToCart(p) }}>Add to Cart</button>
        </div>
      </div>
    )
  };
  return (
    <div>
    <ProductCard productInfo={products} addToCart={addToCart} />
    </div>
  )
}





