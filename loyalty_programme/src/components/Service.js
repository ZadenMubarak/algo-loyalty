import React, {useRef, useState} from 'react'
import './style/service.css'
import Modal from './Verify';



function Services() {

  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [wallet, Walletaddr] = useState('');
  const [thanks, setThanks] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = event => {
    console.log(inputRef.current.value)
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ clear all input values in the form
    setName('');
    Walletaddr('');
    setThanks('');
    setModalOpen(true);
  };

  // function HandleClick(){
    
  //   setModalOpen(true)

  //   return handleSubmit;
  // }
  return (
    <div className='main'>
        <div className='customer'>
            <h2>Reward by membership time</h2>

            <form onSubmit={handleSubmit}>

            <input 
            placeholder='clients full name' 
            type="text" 
            ref={inputRef} 
            name='message' 
            onChange={event => setName(event.target.value)}
            value={name}
            id='message'/>

            <br/><br/><br/>
            <input 
            placeholder='client wallet address' 
            type="text"
            onChange={event => Walletaddr(event.target.value)}
            value={wallet}
            />
            <br></br><br/><br/>
            <textarea placeholder='Word of thanks'
            onChange={event => setThanks(event.target.value)}
            value={thanks}
            ></textarea>
            </form>

            <br/>
            <button className='button-19' type='submit' onClick={
          handleSubmit
          
        }>send reward to customer</button>
        </div>

        {/* <div className='customer1'>
          <h1>reward by action</h1>
        </div> */}
        {modalOpen && <Modal setOpenModal={setModalOpen}/>}
        
    </div>
  )
}

export default Services;
