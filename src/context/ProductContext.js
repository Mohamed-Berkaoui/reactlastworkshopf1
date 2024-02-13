import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'


export const productContext = createContext()

function ProductContext(props) {
  const [products, setProducts] = useState([])
  useEffect(() => {

    axios.get('http://localhost:3000/products/')
      .then((res) => setProducts(res.data))
  }, [products])
  return (
    <productContext.Provider value={products}>
      {props.children}
    </productContext.Provider>
  )
}

export default ProductContext
