import './App.css';
// import Middiv from './components/Middiv';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Services from './components/pages/services';


function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <ul>
          <span>How it works</span>
          <span></span>
        </ul>
      </nav>
      {/* <Middiv/> */}
    </div>
    <br/><br/>
    <h1>What is your bussiness' industry</h1>
            <p>Your decentralied loyalty manager</p>
            <p>Here to help you take care of customers while you take care of your business</p>
            <p>using Algorand</p>
            <br/><br/><br/>
    <div className='parent'>
      
        <div className='route-card'>
           
            <br/><br/><br/>
            
            <button className='services'>services</button>
            <button className='retail'>retail</button>
            <button className='dining'>dining</button>
        </div>
    </div>
    <Routes>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    </Router>
  );
}

export default App;
