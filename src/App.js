import React, { useState, useEffect } from 'react';
import '../src/Components/Products/Products';
import { Nav, Products } from './Components';
import { commerce } from './lib/Commerce';

import './App.css';

function App() {

  const [ products, setProducts ] = useState([])


  const getProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data)
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log('products', products)
  return (
    <div className="App">
      <Nav/>
      <Products/>
    </div>
  );
}

export default App;
