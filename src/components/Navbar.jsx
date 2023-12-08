import React from "react";
import { Link } from "react-router-dom";

const Navbar=() =>{
    return(
       
        <div className='nav-bar'>
        <h4 className='logo-name'>Jet Park</h4>
        <ul className='nav-header'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/service'>Services</Link></li>
          <li><Link to='/testimonial'>Testimonial</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          </ul>
          <button className='login'><Link to='/login'>Login</Link></button>
          <button className='book-now'><Link to='/booknow'>Book Now</Link></button>
        
      </div>
      
    )
}

export default Navbar

