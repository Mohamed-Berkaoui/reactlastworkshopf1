import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useFetchProductsHome() {
    const [products,setProducts]=useState([])
    useEffect(()=>{

        axios.get('http://localhost:3000/products/')
        .then((res)=>setProducts(res.data))
    },[])

  return (
    products
  )
}

export default useFetchProductsHome
