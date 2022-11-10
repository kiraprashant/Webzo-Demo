import React from 'react'
import "../CSSComponent/Footer.css"

function Footer() {
  return (
    <div className='Footer_section  py-5'>
          <div className='row '>
             <div className='Footer_left_div col-lg-4'>
                 <div><img src = "Images/Logo.png" className='Footer_image' alt = "Logo"/></div>
                 <div className='Footer_Left_body'>
                     <p>Wezbo helps you to create website with the right tools, latest feature and flexbility ready to go templates you can redesign error-free websites on your own in just a few minutes</p>
                 </div>

                 <div className='Footer_left_sub'>
                     <span>@2022 wezbo.in</span>
                     <span>A unit of Owlet Communication Pvt.Ltd</span>
                </div>


             </div>

             <div className='col-lg-1'>

             </div>

             <div className='col-lg-7'>
                 <div className='row'>
                      <div className='col-lg-3'>
                        <h4 className='Footer_header'>Company</h4>
                        <div className='footer_body'>
                            <ul>
                                <li>About Us</li>
                                <li>Career </li>
                                <li>Webzo academy</li>
                            </ul>
                        </div>
                      </div>

                      <div className='col-lg-3'>
                        <h4 className='Footer_header'>Pages</h4>
                        <div className='footer_body'>
                            <ul>
                                <li>About Us</li>
                                <li>Career </li>
                                <li>Webzo academy</li>
                            </ul>
                        </div>
                      </div>

                      <div className='col-lg-3'>
                        <h4 className='Footer_header'>Social Media</h4>
                        <div className='footer_body'>
                            <ul>
                                <li>About Us</li>
                                <li>Career </li>
                                <li>Webzo academy</li>
                            </ul>
                        </div>
                      </div>

                      <div className='col-lg-3'>
                        <h4 className='Footer_header'>Support</h4>
                        <div className='footer_body'>
                            <ul>
                                <li>About Us</li>
                                <li>Career </li>
                                <li>Webzo academy</li>
                            </ul>
                        </div>
                      </div>
                 </div>
             </div>
             


          </div>
    </div>
  )
}

export default Footer