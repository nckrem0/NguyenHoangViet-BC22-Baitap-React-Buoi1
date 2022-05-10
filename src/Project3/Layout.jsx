// // tạo class component : rcc
// import React, { Component } from 'react'

// export default class Home extends Component {
//   render() {
//     return (
//       <div>Home</div>
//     )
//   }
// }

// Tạo function component : rfc <enter>
import React from 'react'
import Body from './Body'
import Carousel from './Carousel'
import Footer from './Footer'
import Navbar from './Navbar'


export default function Layout() {
  return (
    <>
        <Navbar />
        <Body />
        <Footer />
    </>
  )
}



