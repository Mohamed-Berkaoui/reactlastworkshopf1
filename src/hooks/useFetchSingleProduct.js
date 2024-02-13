import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useFetchSingleProduct(id) {
  const [product,setProduct]=useState({})

    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`)
        .then((res)=>setProduct(res.data))
    
      },[id])
  return (
    product
  )
}

export default useFetchSingleProduct
