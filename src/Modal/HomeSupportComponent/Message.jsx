import React from 'react'
import './Message.css'
import {AiOutlineSend} from 'react-icons/ai'
import { useState ,useRef,useEffect} from 'react'
import { Spinner } from 'react-bootstrap'

const Message = () => {
    const[message,setMessage]=useState([])
    const[input,setInput]=useState('')
    const[isloading,setLoading]=useState(true)
     useEffect(()=>{
       setTimeout(()=>{
         setLoading(false)
       },4000)
     },[isloading])
    const ref = useRef();
    useEffect(()=>{
      setTimeout(()=>{
        ref.current.focus();
      },4000)
     
    })
   
    const PushMessage=()=>{
      setMessage(old=>[...old,input]);
     
    }
    const MessageCom = ()=>{
      return message.map((value)=>{
        return <h6 className='message-content'>{value}</h6>
    })
    }
    
  return (
    <div className='message-main'>
      <div className="card mx-3 mt-5 " style={{maxWidth:'20rem'}}>
          <div className="card-body text-center" style={{color:'#162266'}}>Message box</div>
          <div className="card-body message-box">
            {isloading?(<div className='d-flex justify-content-center mt-2'><Spinner animation="border" variant="info"/></div>):<MessageCom/>}
              
          </div>
          <div className="card-body d-flex justify-content-between">
              <div><input ref={ref} type="text"  placeholder='Message box...' onChange={(e)=>setInput(e.target.value)}/></div>
            <div className='mt-1 message-icon'><AiOutlineSend color='#162266' size={20} onClick={PushMessage} /></div>

            </div>
              </div>
        
        </div>
     

  )
}

export default Message
