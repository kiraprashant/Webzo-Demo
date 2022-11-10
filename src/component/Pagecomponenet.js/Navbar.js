import React from 'react'
import "../CSSComponent/Navbar.css"

function Navbar() {
  return (
    <nav>
        <div className='Navbar'> 
           <div className='Left_Nav'>
               <ul>
                 <p className='Logo'><img src = "Images/Logo.png" alt = "Logo" /></p>
                 <li className='NavLink active'>Home</li>
                 <li className='NavLink'>About us</li>
                 <li className='NavLink'>Contact us</li>
               </ul>
            </div>

            <div className='Login_Button'>
               <button>Login</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar