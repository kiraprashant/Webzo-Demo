import React from 'react'
import Navbar from './Pagecomponenet.js/Navbar'
import Home from "./Pagecomponenet.js/Home.js"
import Offer from './Pagecomponenet.js/Offer'
import Footer from './Pagecomponenet.js/Footer'
import Plan from './Pagecomponenet.js/Plan'
import Freedom from './Pagecomponenet.js/Freedom'


function Webzo() {
  return (
    <>
      <Navbar />
      <Home />
     {/* frrerddom  Website */}
       <Freedom />
     {/* our plans */}
     <Plan />
     <Offer />
     <Footer />
    </>
  )
}

export default Webzo