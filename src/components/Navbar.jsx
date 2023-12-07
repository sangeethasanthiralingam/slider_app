import React from "react";
import { Link } from "react-router-dom";

const Navbar=() =>{
    return(
       
        <div className='nav-bar'>
        <h4 className='logo-name'>Jet Park</h4>
        <ul className='nav-header'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About US</Link></li>
          <li><Link to='/service'>Services</Link></li>
          <li><Link to='/testimonial'>Testimonial</Link></li>
          <li><Link to='/contact'>Contact US</Link></li>
          </ul>
          <button className='login'><Link to='/login'>Login</Link></button>
        
      </div>
      
    )
}

export default Navbar

