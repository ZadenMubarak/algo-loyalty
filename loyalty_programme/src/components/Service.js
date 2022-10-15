import React, {useRef} from 'react'
import './style/service.css'

function Services() {

    const inputRef = useRef(null);

    const HandleClick = () =>{
        console.log(inputRef.current.value)
    }
  return (
    <div className='main'>
        <div className='customer'>
            <h2>Reward by membershiip time</h2>

            <input placeholder='clients full name' type='text' ref={inputRef} name='message' id='message'/>
            <br/><br/>
            <input placeholder='client wallet address' type='text'/>
            <br></br><br/>
            <textarea placeholder='Word of thanks'></textarea>

            <br/><br/>
            <button className='button-19' onClick={HandleClick}>send reward to customer</button>
        </div>

        <div className='customer1'>
          <h1>reward by action</h1>
        </div>
        
    </div>
  )
}

export default Services