import React, { useState } from 'react';
import './App.css';
import './style/Style.css';
import image1 from './img/park1.jpg';
import image2 from './img/park2.jpg';
import image3 from './img/park3.jpg';
import image4 from './img/park4.jpg';
import leftarrow from './img/leftarrow.png';
import rightarrow from './img/rightarrow.png';
import Navbar from './components/Navbar';
import './style/mystyle.css';
import Footer from './components/Footer';



function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const images = [image1, image2, image3, image4];
  const textContent = [
    'Welcome to Jet Park!',
    'Explore Amazing Features!',
    'Discover Innovation!',
    'Connect with Us for Services!',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
     <div className="container">
       
       {/* Render content based on currentPage */}
       <div className='content'>
         {/* {currentContent} */}
       </div>
      <Navbar/>
      <div className='slider_container'>
        <div>
          <img
            src={leftarrow}
            alt='left-arrow'
            className='left-arrow'
            onClick={handleLeftArrowClick}
          />
        </div>
        <div className='slider'>
          <div className='image-with-text'>
            <img src={images[currentImageIndex]} alt={`Slider ${currentImageIndex + 1}`} />
            <h3 className='text-content'>{textContent[currentImageIndex]}</h3>
          </div>
        </div>
        <div>
          <img
            src={rightarrow}
            alt='right-arrow'
            className='right-arrow'
            onClick={handleRightArrowClick}
          />
        </div>
      </div>
    <Footer/>
    </div>
  );
}

export default App