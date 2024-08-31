import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Page from './Components/Business/BussinessHome/BusinessHome.js'
import Page2 from './Components/Business/Home/Home.js'
import Page3 from './Components/Business/ipTelephone/Telephone.js'
import './Components/Business/BussinessHome/style/reset.css'

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/home" element={<Page />} />
            <Route path="/about" element={<Page2 />} />

            <Route path="/contact" element={<Page3 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
