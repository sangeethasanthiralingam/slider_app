import React from "react";
import { Link } from "react-router-dom";
import './../style/Style1.css';

const Footer=() =>{
  return(
      
    <div>
      <div className='footer-logo'>
            <p className="copyright">© 2023 <b style={{ color:'red' }}>Jet Park</b>. All rights reserved.</p>
      </div>

      <div className='footer'>
      Jet Park aim to offer the best prices for both short stay park as well as long term park.

Our park prices cannot be beaten on value and the level of service offered.
<br/>
We offer the choice of valet style park and fantastic value Park & Ride park.
      </div>
    
    </div>

      
    )
}

export default Footer

