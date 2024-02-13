import React, { useEffect, useState } from 'react'
import HomeSlider from '../components/HomeSlider'
import axios from 'axios'
import Product from '../components/Product'
import useFetchProductsHome from '../hooks/useFetchProductsHome'
import { useParams, useSearchParams } from 'react-router-dom'

function Home() {

const products=useFetchProductsHome()
  return (
    <div className='home-container'>
      <HomeSlider/>
     <div className='products'> {products.slice(0,5).map((prod)=><Product key={prod.id} product={prod}/>)}
    </div></div>
  )
}

export default Home

