import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchSingleProduct from '../hooks/useFetchSingleProduct';

function SingelProduct() {
  const navigate=useNavigate()
  const params = useParams()
  const id = params.id
  const product = useFetchSingleProduct(id)
  return (
    <Card className="bg-dark text-white ">
      <Card.Img src={product.image} alt="Card image"  style={{height:'150px' ,width:'150px'}}/>
      <Card.ImgOverlay>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay> 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
      style={{width:'100px',height:'70px',background:'white',zIndex:5000}} onClick={()=>navigate(-1)}>
     <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"/>
     </svg>
  
    </Card>
   );
}

export default SingelProduct;