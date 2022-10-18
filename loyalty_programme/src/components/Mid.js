import React from 'react'
import './mid.css'
import { Link } from 'react-router-dom'


const Mid = () => {
  return (

    <div className='parent1'>
          <div className='text-div'>
            <h1>Stop the struggling</h1>
            <h1>Keep your customer's happy</h1>
            
    
            <h4>Your decentralied customer loyalty manager</h4>
            <h4>Here to help you take care of customers while you take care of your business</h4>
            <h4>using Algorand</h4>
          </div>

        <div className='middle'>
            <h3>what is your company's industry</h3>
            <br/><br/><br/>
            
            <button className='serv'><Link to='/service' className='ser-link'>Services</Link></button>
            <button className='retail'><Link to='/retail' className='ret-link'>retail</Link></button>
            <button className='dining'>dining</button>
        </div>
    </div>
  )
}

export default Mid