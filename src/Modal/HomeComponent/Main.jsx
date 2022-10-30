import React from 'react'
import { HomeSoftwareContent } from '../../Controller/HomePageSoftwareContent'
import Logo from '../HomeSupportComponent/Home'
import Hire from '../HomeSupportComponent/Home2'
import {FiPhoneCall} from 'react-icons/fi'
import {BsFillArrowUpCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'
import {IoTriangleOutline} from 'react-icons/io'
import {TbMessage2Share} from 'react-icons/tb'
import Menu from '../Menu/Menu'
import './Main.css'
import { useState,useEffect } from 'react'
import { BeatLoader,PulseLoader ,PacmanLoader,SyncLoader } from 'react-spinners'
import Message from '../HomeSupportComponent/Message'
import { Context } from '../../App'
import { useContext } from 'react'

const Main = () => {
const[change,setChange]=useState(false)
const[loading,setLoading]=useState(true)
const {count,setCount} =useContext(Context)
const openMessage =()=>{
  let message = document.getElementById('message-compond');
 return message.classList.toggle('message-compond-active')
}

const Scroll = ()=>{
  let compoent2 = document.getElementById('main-home-compoent2')
  compoent2.scrollTo({
    top: 0, //730
    behavior: "smooth"
})
}


const Loading =()=>{
    return(
      <div className="loader">
      <div className="loading"><SyncLoader  color='white' size={9}/></div>
  </div>
    )
  } 
const Home = ()=>{
  
  
    return(
      <>
     {change?<Menu/>:""}
     <div className="main-home-component">
      <div className="main-home-component2" id="main-home-compoent2">
      <div className="active" id='top'>
        <TbMessage2Share color='#162266' onClick={openMessage} className='mx-4' size={32}/><BsFillArrowUpCircleFill size={32} onClick={Scroll}  title="Scroll top" color='#162266'/>
      </div>
      <div className="message-compond" id='message-compond'><Message/></div>
     
      <div className="section1">
          <div className="box1" onClick={()=>setChange(!change)}><Logo/></div>
          <div className="box2"><Hire/></div>
       </div>
       <div className="section2">
           <div className="box3">gnanaprakash full stack  web developer  &#169;<span></span></div>
           <div className="box4">
             <p className='mt-5 mx-5'>Hi, my  name is <br /><span>GnanaPrakash || Gp</span></p>
             <p className='mt-5 mx-5'>I'm an <span style={{fontWeight:'800',fontSize:'1.5rem'}}> Full stack web developer </span>from TamilNadu, India.</p>
            <div className="scroll mt-5">
              <div className="scroll-word" style={{letterSpacing:'5px'}}>scroll</div>
            <div className="scroll-line mt-4"></div>
            </div>
            </div>
          {/* <div className="box5" id='box5'><FiPhoneCall color='green'/>  <span className='scroll-word mx-2' > +91 6379093708</span></div>  */}
           <div className="section"></div>
        </div>
      <div className="content-1">
        <p>Let's work together</p>
        <p>From interaction design to scaleable design systems, single-page apps to something more experimental with WebGL. I help awesome people to build ambitious yet accessible web projects - <span style={{fontWeight:'700',fontSize:'1rem'}}>the wilder, the better.</span></p>
        <button>About my approach</button>
      </div>
      <div className="content-2 ">
        <p>Open Source</p>
        <p>From time to time I like to release open source projects to help the wider web development community. Below are two of my most popular releases.</p>
        
      </div>
      <div className="content-3">
  
        {
          HomeSoftwareContent.map((value)=>{
            return(
              <>
              <div>
        <div className="container" style={{maxWidth:'76rem'}}>
          <div className="row">
            <div className="col-lg-5 col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
              <img src={value.image}className='img img-rounded mb-5' alt="" />
            </div>
            <div className="col-lg-7  col-md-9 col-sm-12 software">
              <p key={value.software} className='mb-5'>{value.software}</p>
              <p key={value.content1}>{value.content1}</p>
              <p key={value.content2}>{value.content2}</p>
              <button key={value.button}>{value.button}</button>
            </div>
          </div>
        </div>
      </div>
              </>
            )
          })
        }
       
      </div>
  
      </div>
      </div>
       
      </>

    )

  }
    
    useEffect(()=>{
      setTimeout(()=>[
        setLoading(false)
      ],2000)
      
   },[loading])
  
    

  
   

 
  
  return (
   
 <> {(loading)?<Loading/>:<Home/>}
  
 </>
  )
}

export default Main