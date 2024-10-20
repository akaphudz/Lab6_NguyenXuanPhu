import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Product';
import ProductDetail from './components/Productdetails';
import Cart from './components/Cart';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [ cartItems, setCartItem ] = useState([])
  const handleAddToCart = (product) => {
    setCartItem([...cartItems, product]);
  }
  const handleCheckout = () => {
    setCartItem([])
  }
  return (
    <BrowserRouter>
      <Header cartItems={cartItems} />
      <Routes>
        <Route index element={<Products handleAddToCart={handleAddToCart}/>}/>
        <Route path='/detail/:id' element={<ProductDetail handleAddToCart={handleAddToCart}/>}/>
        <Route path='/cart' element={<Cart cartItems={cartItems} handleCheckout={handleCheckout}/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
