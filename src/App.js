import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/Style.css';
import image1 from './img/park1.jpg';
import image2 from './img/park2.jpg';
import image3 from './img/park3.jpg';
import image4 from './img/park4.jpg';
import leftarrow from './img/leftarrow.png';
import rightarrow from './img/rightarrow.png';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import Service from './components/Services';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  let currentContent = null;

  if (currentPage === 'home') {
    currentContent = (
      <>
        {/* Your home page content */}
        <button onClick={() => handleNavigation('contact')}className='hidden-button'>Go to Contact</button>
        <button onClick={() => handleNavigation('testimonial')}className='hidden-button'>Go to Testimonial</button>
        <button onClick={() => handleNavigation('services')}className='hidden-button'>Go to services</button>

      </>
    );
  } else if (currentPage === 'contact') {
    currentContent = <Contact />;
  } else if (currentPage === 'testimonial') {
    currentContent = <Testimonial />;
  }
  else if (currentPage === 'services') {
    currentContent = <Service />;
  }
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
      <div className='nav-bar'>
        <h4 className='logo-name'>Jet Park</h4>
        <ul className='nav-header'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About US</a></li>
          <li><a href='#' onClick={() => handleNavigation('services')}>Services</a></li>
          <li><a href='#' onClick={() => handleNavigation('testimonial')}>Testimonial</a></li>
          <li><a href='#' onClick={() => handleNavigation('contact')}>Contact US</a></li>
          <button className='login'>Login</button>
        </ul>
      </div>
      {/* Render content based on currentPage */}
      <div className='content'>
        {currentContent}
      </div>
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
      <div className='footer'>
        <div className='footer-logo'>
          <p className="copyright">© 2023 Jet Park. All rights reserved.</p>
        </div>
        <div className='footer-links'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About US</a></li>
            <li><a href='#' onClick={() => handleNavigation('services')}>Services</a></li>
            <li><a href='#' onClick={() => handleNavigation('testimonial')}>Testimonial</a></li>
          <li><a href='#' onClick={() => handleNavigation('contact')}>Contact US</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;