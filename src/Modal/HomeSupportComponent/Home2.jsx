import React from 'react'
import {TbMessageCircle2} from 'react-icons/tb'
import './Home2.css'
import Mousemove from '../../Controller/Mousemove'

const Home2 = () => {

  return (
    <>
    <div className="hireme">
    <TbMessageCircle2 color="#8a17e2" className='icon-meg' onClick={()=> window.open('')} size={31}/>
    <div className="name">hire me</div>
    <svg height="100" width="100" className='circle' id='circle'>
  <circle cx="50" cy="50" r="10"  fill="#aadcec" />
     </svg>
</div>
    
    
    </>

    
  )
}

export default Home2
