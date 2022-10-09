import React from 'react'
import './styles/Middiv.css'
import { Navigate, Link } from 'react-router-dom'

const Middiv = () => {
  return (
    <div className='parent'>
      <div className='center'></div>
      
        <div className='route-card'>
        <h1>What is your bussiness' industry</h1>
           
            <br/><br/><br/>
            
            <button className='services' onClick={()=>{<Navigate to='/services' replace={true}/>}}><Link to='/services'>services</Link></button>
            <button className='retail'>retail</button>
            <button className='dining' >dining</button>
        </div>
    </div>
  )
}

export default Middiv