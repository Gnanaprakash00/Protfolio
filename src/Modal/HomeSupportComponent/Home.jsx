import React from 'react'
import './Home.css'
import {BsTriangle} from 'react-icons/bs'
import {IoMdSquare} from 'react-icons/io'
import { Move } from '../../Controller/Mousemove'
import { useState } from 'react'
import Menu from '../Menu/Menu'
import Main from '../HomeComponent/Main'

const Home = () => {
  const[menu,setMenu]=useState(true)
  const Menu =()=>{
  
    setMenu(!menu)
  }
  Move('triangle');
  return (
    <div>
     
            <div className="container-fuild">
            <div className="row">
              <div className="col-5 mt-3  tri-icon"> 
             <div className="icon mx-2"><BsTriangle /></div>
                <div className="line mt-5"> </div>
                  <div className="menu mt-5 "><p className='mt-1' onClick={Menu}>{menu?"menu":"close"}</p></div>
             <svg width="140" height="200" className="triangle" id='triangle'>
            <polygon className="triangles"  points="70,124 23,189 112,189 "></polygon>
             </svg>
            </div>
            </div>
           </div>
           {/* <div className="menu-bar">
             <div className="menu-value">
               
              </div>
             
            </div> */}
    </div>
   
  )
}

export default Home
