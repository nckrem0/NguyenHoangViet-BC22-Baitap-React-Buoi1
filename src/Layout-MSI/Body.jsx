import React from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Products from './Products'

export default function Body() {
  return (
    <div className='bg-dark'>
        <Carousel />
        <Products />
        <Footer />
    </div>
  )
}
