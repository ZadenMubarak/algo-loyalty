import React, {useRef, useState} from 'react'
import './style/service.css'
import Modal from './Verify';



function Services() {
  const [modalOpen, setModalOpen] = useState(false);

    const inputRef = useRef(null);

    const HandleClick = () =>{
        console.log(inputRef.current.value)
    }
  return (
    <div className='main'>
        <div className='customer'>
            <h2>Reward by membershiip time</h2>

            <input placeholder='clients full name' type="text" ref={inputRef} name='message' id='message'/>
            <br/><br/><br/>
            <input placeholder='client wallet address' type="text"/>
            <br></br><br/><br/>
            <textarea placeholder='Word of thanks'></textarea>

            <br/>
            <button className='button-19' onClick={() => {
          setModalOpen(true);
        }}>send reward to customer</button>
        </div>

        {/* <div className='customer1'>
          <h1>reward by action</h1>
        </div> */}
        {modalOpen && <Modal setOpenModal={setModalOpen}/>}
        
    </div>
  )
}

export default Services;
