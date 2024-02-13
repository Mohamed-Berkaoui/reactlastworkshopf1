import React, { useContext } from 'react'
import { productContext } from '../context/ProductContext'
import Product from '../components/Product'
import { useSearchParams } from 'react-router-dom'

function Products() {
  const [query,setQuery]=useSearchParams()
  let search=query.get('search')
  console.log(query.get('search'));
const products=useContext(productContext)
  return (
    <div>
     <div className='products'> {products.filter((prod)=>search==null?prod:prod.title.includes(search))
     .map((prod)=><Product key={prod.id} product={prod}/>)}
      </div>
    </div>
  )
}

export default Products
