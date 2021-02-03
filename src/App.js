import React, { useState, useEffect } from 'react';
import '../src/Components/Products/Products';
import { Nav, Products } from './Components';
import { commerce } from './lib/Commerce';

import './App.css';

function App() {

  const [ products, setProducts ] = useState([])
  const [ cart, setCart ] = useState({})

  const getProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const getCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  const addToCart = async (productId, qty) => {
    const item = await commerce.cart.add(productId, qty);
    setCart(item.cart);
  }

  console.log('products', products)
  console.log('cart', cart)
  return (
    <div className="App">
      <Nav cart={cart}/>
      <Products products={products} addToCart={addToCart}/>
    </div>
  );
}

export default App;
