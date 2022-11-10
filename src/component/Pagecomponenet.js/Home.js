import React from 'react'
import "../CSSComponent/Home.css"

function Home() {
  return (
    <>
      <div className='Hero_Section '>
          <h2 >Creating your website is much easy now</h2>
          <p>We have super easy and ready to go designs templates. Just put your business details and your are online</p>
          <button className='Get_Started'>Get Started</button>
       </div>

       <div className='Hero_Card'>
          <div className='row'>
             <div className='col-lg-3 col-sm-6 col-12  '>
             <img src = "Images/three.jpg" className='img-fluid Image_fit' alt = "Hero" />
             </div>

             <div className='col-lg-3 col-sm-6 col-12 '>
             <img src = "Images/myOne.webp" className='img-fluid Image_fit Adjust_Image' alt = "Hero" />
             </div>

             <div className='col-lg-3 col-sm-6 col-12 '>
             
             <img src = "Images/four.jpg" className='img-fluid Image_fit' alt = "Hero" />
             </div>

             <div className='col-lg-3 col-sm-6 col-12 '>
             
             <img src = "Images/Two.jpg" className='img-fluid Image_fit Adjust_Image' alt = "Hero" />
             </div>
          </div>
       </div>

      </>
    
  )
}

export default Home