import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css';
import Login from './components/login';
import Register from './components/request';
import RegisterResonse from './components/RegisterResponse';
import Forgot from './components/forgot';
import ForgotResonse from './components/forgotResponse';
import LoginResponse from './components/loginResponse';
import ResetCredentials from './components/ResetCredentials';

import 'bootstrap/dist/css/bootstrap.min.css';



const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="img1.png" className='imgsrc' onDragStart={handleDragStart} role='show' alt='img1'/>,
  <img src="img2.png" className='imgsrc' onDragStart={handleDragStart} role="show" alt='img2'/>,
  <img src="img3.png" className='imgsrc' onDragStart={handleDragStart} role="show" alt='img3'/>,
];

function App() {
  return (
    <div className='App'>
      <div className='sliderimg'>
        <AliceCarousel mouseTracking items={items} autoPlay autoPlayInterval={2000} disableButtonsControls='true' infinite/>
      </div>
      <div className='leftpart'>
        {/* <p><Register /></p> */}
        {/* <p><Login /></p> */}
        {/* <p><RegisterResonse /></p> */}

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/submit-request" element={<RegisterResonse />} />
          <Route path='/forgotPassword' element={<Forgot />} />
          <Route path='/submit-forgot' element={<ForgotResonse />} />
          <Route path='/home' element={<LoginResponse />} />
          <Route path='/reset' element={<ResetCredentials />} />
        </Routes>
      </BrowserRouter>
      
      </div>
    </div>
  );
}

export default App;