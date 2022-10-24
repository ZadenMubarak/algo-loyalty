import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Connect from './components/Connect';
import Home from './components/Home';
import Services from './components/Service';
import Retail from './components/Retail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/service' element={<Services/>}/>
          <Route path='/retail' element={<Retail/>}/>

        </Routes>
        <nav>
          <ul>
            <Link className='tiola' to='/'>Tiola</Link>
            <li className='howit'>How it works</li>
            <li className='price'>Pricing</li>
          </ul>
          <button className="button-29" onClick={Connect}>Connect Algo wallet</button>
        </nav>
      </div>
    </BrowserRouter>

  );
}

export default App;
