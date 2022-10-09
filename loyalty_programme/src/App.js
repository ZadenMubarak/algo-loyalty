import './App.css';
import Middiv from './components/Middiv';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Services from './components/pages/services';
import Connect from './components/Connect';

function App() {
  return (
    <Router>
  
    <Routes>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    <div className="App">
      <nav>
        <ul>
          <span><Link to='/services' className='serv'>How it works</Link></span>
          <span></span>
        </ul>
        <button className="button-29" onClick={Connect}>Connect Algo wallet</button>
      </nav>
      {/* <Middiv/> */}
    </div>
    <br/>
    <br/><br/><br/><br/>

    <div className='text-div'>
    
            <h4>Your decentralied customer loyalty manager</h4>
            <h4>Here to help you take care of customers while you take care of your business</h4>
            <h4>using Algorand</h4>
      </div>

            <br/><br/><br/>

            <Middiv/>
    </Router>
  );
}

export default App;
