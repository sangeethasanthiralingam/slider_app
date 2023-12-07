import React from "react";
import { Link } from "react-router-dom";

const Footer=() =>{
  return(
      
    <div>
      <div className='footer'>
      <div className='footer-logo'>
        <p className="copyright">© 2023 Jet Park. All rights reserved.</p>
      </div>
      <div className='footer-links'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About US</Link></li>
          <li><Link to='/service'>Services</Link></li>
          <li><Link to='/testimonial'>Testimonial</Link></li>
          <li><Link to='/contact'>Contact US</Link></li>
        </ul>
      </div>
    </div>
    
    </div>

      
    )
}

export default Footer

