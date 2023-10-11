import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css';
import Login from './components/login';
import Register from './components/request';
import RegisterResonse from './components/RegisterResponse';


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
        <p><RegisterResonse /></p>
      
      </div>
    </div>
  );
}

export default App;