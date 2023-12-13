import React, { useState } from "react";
import emailimg from '../img/emailimg.png';
import passwordimg from '../img/passwordimg.png';
import conpass from '../img/conpass.png';
import { Link } from "react-router-dom";

const ForgotPassword = () => {

    const [email ,setEmail] =useState('');
    const [password, setPassword] = useState('');
    const [conpassword, setConPassword] = useState('');

    const submitForm = (event) => {
        
        event.preventDefault();

        if (password !== conpassword) {
            alert("Password and Confirm Password do not match");
        }
        else{
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const finduser = existingUsers.find((user) => user.email === email);

            if(finduser)
            {
                
                finduser.password = password;
                
                localStorage.setItem('users', JSON.stringify(existingUsers));
                alert("the password sucessfully change")
            }
        }
    }

    return(
    <div className="body1">
    <div className="container1">
                <div className="header1">
                    <div className="text1"> Forgot Password </div>
                    <div className="underline1"></div>
                </div>
                <form onSubmit={(e) => submitForm(e)}>
                    <div className="inputs1">
                        <div className="input1">
                            <img src={emailimg} alt="" />
                            <input type="email" placeholder="Email Address" name="email" 
                                value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="input1">
                            <img src={passwordimg} alt="" />
                            <input type="Password" name="password" placeholder="Enter new password" 
                                value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                            <div className="input1">
                            <img src={conpass} alt="" />
                            <input type="Password" name="conpassword" placeholder="Enter confirm password" 
                                value={conpassword} onChange={(e) => setConPassword(e.target.value)}/>
                            </div>
                        </div>
                    <div className="submit-container1">
                        <button className="btnsubmit"> Submit </button>
                    </div>
                    <div className="submit-container1">
                    <Link to='/login' className="link">
                        <button className="btnsubmit"> Cancel </button>
                    </Link> 
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default ForgotPassword;