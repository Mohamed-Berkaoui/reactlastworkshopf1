import React, { useContext } from 'react'
import { productContext } from '../context/ProductContext'
import Product from '../components/Product'

function Products() {
const products=useContext(productContext)
  return (
    <div>
     <div className='products'> {products
     .map((prod)=><Product key={prod.id} product={prod}/>)}
      </div>
    </div>
  )
}

export default Products
