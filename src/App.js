import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingelProduct from './pages/SingelProduct';
import Products from './pages/Products';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';


export const productContext = createContext()
function App() {


  return (
  
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingelProduct />} />
        </Routes>
      </div>

  );
}

export default App;
