import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import Login from './components/Login';
import About from './components/About';
import Service from './components/Service';
import Booknow from './components/Booknow';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/service' element={<Service/>} />
      <Route path='/testimonial' element={<Testimonial/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/booknow' element={<Booknow/>} />
    </Routes>
  </Router>
);

reportWebVitals();
