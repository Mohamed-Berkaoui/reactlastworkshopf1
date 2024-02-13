import axios from 'axios';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddProduct() {
    const [product,setProduct]=useState({
        title:'',
        price:'',
        description:'',
        image:'',
        category:""
    })
    const navigate=useNavigate()
   
function submitprod(){
    axios.post('http://localhost:3000/products/',product).then((res)=>{
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
        <Form.Control placeholder=" input" onChange={(e)=>setProduct({...product,title:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>price</Form.Label>
        <Form.Control placeholder=" input" onChange={(e)=>setProduct({...product,price:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>description</Form.Label>
        <Form.Control placeholder=" input" onChange={(e)=>setProduct({...product,description:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>imageurl</Form.Label>
        <Form.Control placeholder=" input"  onChange={(e)=>setProduct({...product,image:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>category</Form.Label>
        <Form.Control placeholder=" input" onChange={(e)=>setProduct({...product,category:e.target.value})} />
      </Form.Group>
      <Button onClick={submitprod} > submit product</Button>
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

export default AddProduct;