import React , {useState }from 'react'
import "../CSSComponent/Plan.css"
import Plancard from "../ComponentArray/Plan"

function Plan() {
  const [Myplan , setMyplan] = useState(Plancard)
  console.log(Myplan)
  return (

  <>
    <div className='Plan mt-5 py-5'>
        <h2 className=' mt-5 pt-5'>Our Plans</h2>
        <p> choose Flexible plan as per your bussiness requirement</p>
    </div>
   <div className='Plan_Wrapper'>
    <div className='Plan_container'>
       <div className='Myplan'>
          <div className='row'>

              {Myplan.map((elem)=>{
                return(
                  <div className='col-lg-4 '>
                <div className={`Plan_card ${elem.Heading}`}>
                    <div className='Plan_Header_Card'>
                        <h2>{elem.Heading}</h2>
                        <p>{elem.Price}</p>
                        <hr className='mt-5'/>
                    </div> 
                     <div className="Plan_Header_Body">
                     <ul>
                    <li className='body_item'><i className="fa-sharp fa-solid fa-check Myicon"></i><span>our easy-to-use website</span></li>
                    <li className='body_item'><i className="fa-sharp fa-solid fa-check Myicon"></i><span>Drag-and-drop builder</span></li>
                    <li className='body_item'><i className="fa-sharp fa-solid fa-check Myicon"></i><span>Assertive Editing tools</span></li>
                    <li className='body_item'><i className="fa-sharp fa-solid fa-check Myicon"></i><span>Endless opportunities</span></li>
                    
                   </ul>
                   
                     </div>

                     <div className='Plan_Header_btn'>
                     <button>Choose Plan</button>
                     </div>
                </div>
               
              </div>
                )
              })}

              




          </div>
       </div>
    </div>
   </div> 
    </>
  )
}

export default Plan