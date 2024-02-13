import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingelProduct from './pages/SingelProduct';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import EditDeleteProd from './pages/EditDeleteProd';
import UpdateProduct from './pages/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/editdelete' element={<EditDeleteProd />} />
        <Route path='/editdelete/:id' element={<UpdateProduct />} />



        <Route path='/products/:id' element={<SingelProduct />} />
      </Routes>
    </div>

  );
}

export default App;
