import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFetchSingleProduct from '../hooks/useFetchSingleProduct';
function UpdateProduct() {
    const [product,setProduct]=useState({})
    const navigate=useNavigate()
   const params=useParams()
   const id=params.id
   let oldProduct=useFetchSingleProduct(id)
useEffect(()=>{
    setProduct(oldProduct)
},[oldProduct])
   
function submitprod(){
    axios.put(`http://localhost:3000/products/${id}`,product).then((res)=>{
        toast("product created")
        setTimeout(()=>{
            navigate("/")
        },3000)

    })
}
  return (
    <div style={{width:'50%',margin:'auto'}}>
      <Form.Group className="mb-3">
        <Form.Label>product title</Form.Label>
        <Form.Control placeholder=" input" value={product.title} onChange={(e)=>setProduct({...product,title:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>price</Form.Label>
        <Form.Control placeholder=" input" value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>description</Form.Label>
        <Form.Control placeholder=" input" value={product.description} onChange={(e)=>setProduct({...product,description:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>imageurl</Form.Label>
        <Form.Control placeholder=" input"  value={product.image} onChange={(e)=>setProduct({...product,image:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>category</Form.Label>
        <Form.Control placeholder=" input" value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})} />
      </Form.Group>
      <Button  onClick={submitprod}> submit product</Button>
      <ToastContainer  astContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition= 'Bounce'
/>
    </div>
  );
}

export default UpdateProduct;