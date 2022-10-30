import React from 'react'
import './Menu.css'
import Hire from '../HomeSupportComponent/Home2'
import Logo from '../HomeSupportComponent/Home'
import {FaGithub} from 'react-icons/fa'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {BsLinkedin , BsWhatsapp} from 'react-icons/bs'

const Menu = () => {
    const data = [
        {
            route:"home",
            routecontent:"Back to the home page."
        },
        {
            route:"project",
            routecontent:"My approach to development."
        },
        {
            route:"Skill",
            routecontent:"A little about me and my background."
        },
        {
            route:"Resume",
            routecontent:"My latest writing on tech and language."
        },

    ]
  return (
    <div>
      <div className="toggle">
          <div className="toggle-bar">
              {/* <div className="container-fluid">
              <div className="section1" style={{position:'relative',top:'-1.5rem'}}>
              <div className="box1"><Logo/></div>
              <div className="box2"><Hire/></div>
              </div>
           </div> */}
           <div className="container-fluid social-media" style={{margin:'12rem 0 0 2.5rem'}}>
               <div className="lines"></div>
               <div className="icons"><FaGithub color='#0f1b61' className='me-3' size={20}/> <MdOutlineMarkEmailUnread color='#0f1b61' className='me-3' size={20}/> <BsLinkedin className='me-3' color='#0f1b61' size={20}/> <BsWhatsapp color='#0f1b61' className='me-3' size={20}/> </div>
            </div>
           <div className="container-fluid mt-5">
               {
                   data.map((value)=>{
                       return(
                        <div className="row route">
                        <div className="col-lg-3 col-sm-12 route-link"><p className='mx-5'>{value.route}</p></div>
                        <div className="col-lg-3 route-content">{value.routecontent}</div>
                     </div>

                       )
                   })
               }
              
            </div>
              </div>
        </div>
    </div>
  )
}

export default Menu
