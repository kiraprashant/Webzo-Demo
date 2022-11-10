import React from 'react'
import "../CSSComponent/Offer.css"

function Offer() {
  return (
    <>
    <div className='Offer mt-5 pt-5'>
        <h2 className=' mt-5 pt-5'>What we offer</h2>
    </div>

      <div className='Offer_card'>

       <div className='row'>
         <div className='col-lg-4'>
          <div className='Offer_Mycard'>
            <img src = "Images/Offerone.png" className='img-fluid Offer_fit' alt = "Hero" />
             <div className='Card_body'>
                <h3 className='Body_title'>User-freindly</h3>
                <ul>
                    <li className='body_item'><i className="fa-sharp fa-solid fa-check Myicon"></i><span>our easy-to-use website</span></li>
                    <li className='body_item'><i className="fa-sharp fa-solid fa-check Myicon"></i><span>Drag-and-drop builder</span></li>
                    {/* <li className='body_item'><i className="fa-sharp fa-solid fa-check Myicon"></i><span>Assertive Editing tools</span></li> */}
                    <li className='body_item'><i className="fa-sharp fa-solid fa-check Myicon"></i><span>Endless opportunities</span></li>
                </ul>
             </div>
          </div>
         </div>

         <div className='col-lg-4'>
         <div  className='Offer_Mycard'>
         <img src = "Images/offer2.png" className='img-fluid Offer_fit' alt = "Hero" />
         <div className='Card_body'>
                <h3 className='Body_title'>Inexpensive & reasonable</h3>
                <ul>
                    <li className='body_item'><i className="fa-sharp fa-solid fa-check Myicon"></i><span>advanced options to built premium website</span></li>
                    <li className='body_item'><i className="fa-sharp fa-solid fa-check Myicon"></i><span>Full-fledged and complete control in designing</span></li>
                    <li className='body_item'><i className="fa-sharp fa-solid fa-check Myicon"></i><span>Loaded with premium features </span></li>

                </ul>
             </div>
         </div>
         </div>

         <div className='col-lg-4'>
         <div  className='Offer_Mycard'>
         <img src = "Images/offer3.png" className='img-fluid Offer_fit' alt = "Hero" />
         <div className='Card_body'>
                <h3 className='Body_title'>User-freindly</h3>
                <ul>
                    <li className='body_item'><i className="fa-sharp fa-solid fa-check Myicon"></i><span>Many professional website templates.</span></li>
                    <li className='body_item'><i className="fa-sharp fa-solid fa-check Myicon"></i><span>Flexibility to include additional features.</span></li>
                    <li className='body_item'><i className="fa-sharp fa-solid fa-check Myicon"></i><span>Intuitive features and customize workflows as per need</span></li>
                </ul>
             </div>
         </div>
         </div>


      </div>
      </div>


      </>

  )
}

export default Offer