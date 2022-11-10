import React from 'react'
import "../CSSComponent/Freedom.css"

function Freedom() {
  return (
    <>
       <div className='Freedom_Section'>
    
            <div className='row'>
            <div className='col-lg-4'>
                <div className='Freedom_Left_Header'><h2>The Freedom to Create the Website You Want</h2></div>
                <ul>
                    <li className='Freedom_Item'><i className="fa-sharp fa-solid fa-check Freedom_Icon"></i><span>Get great results with our trendy, elegant,and stunning templates</span></li>
                    <li className='Freedom_Item'><i className="fa-sharp fa-solid fa-check Freedom_Icon"></i><span>Simple navigation</span></li>
                    <li className='Freedom_Item'><i className="fa-sharp fa-solid fa-check Freedom_Icon"></i><span>Use our optimized layout</span></li>
                    <li className='Freedom_Item'><i className="fa-sharp fa-solid fa-check Freedom_Icon"></i><span>Industry-specific designs that helpsto boost your business or any startup.</span></li>
                    </ul>
                    <button className='Freedom_btn'>Get started</button>
            </div>
            <div className='col-lg-8'>
              <div className='My_image'>
                  <img className='Reponsive' src = "Images/JrFreedom.PNG" alt = "All"/>
               </div>
             </div>
            </div> 
       </div>
    </>
  )
}

export default Freedom