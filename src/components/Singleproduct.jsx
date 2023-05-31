import React, {useState, useEffect} from 'react'


export default function Singleproduct() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const addToCart = (products) => {
    setCart ([...cart, products]);
  };

  const getsingleproduct = async () => {
    const stripe = ('stripe')('sk_test_51N5zTXLYz2wopO9ltEEsHAsZUP8hDbwgzZg984K7URS1vWLYBatX1IdxlxXNoTkr6BU6u9qHeB4KuXJ0chxBKGIg00kA2L4hqN');

    const product = await stripe.products.retrieve('prod_NwabwHZ2mQU6Fj');
    setProducts(product);
  };

  useEffect(() => {
    getsingleproduct();
  }, []);

  const ProductCard = ({ productInfo, addToCart }) => {
    const p = productInfo
    return (
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{p.name}</h5>
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
