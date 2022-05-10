import React from 'react'
import Laptop from './Laptop'
import Phone from './Phone'

export default function Products() {
  return (
    <>
        <section id="smartphone" className="container-fluid pt-5 pb-5">
            <h1 className="text-white text-center">BEST SMARTPHONE</h1>
            <div className="row">
                < Phone />
                < Phone />
                < Phone />
                < Phone />
            </div>
        </section>
        <Laptop />
    </>
  )
}
