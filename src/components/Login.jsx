import React, { useState } from "react";
import person from '../img/person.png';
import emailimg from '../img/emailimg.png';
import passwordimg from '../img/passwordimg.png';
import conpass from '../img/conpass.png';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";


const Login = () => {
    const [action, setAction] = useState('Login');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conpassword, setConPassword] = useState('');

    const submitForm = (event) => {
        
        event.preventDefault();

        if (action === 'Sign Up') {

            if(name !== '' && email !=='' && password !=='' && conpassword !=='')
            {
                if(password === conpassword)
                {
                    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

                    const isEmailRegistered = existingUsers.some((user) => user.email === email);

                    if (!isEmailRegistered) {
                        const user = {
                            name: name,
                            email: email,
                            password: password,
                            conpassword :conpassword
                        };

                        existingUsers.push(user);

                        localStorage.setItem('users', JSON.stringify(existingUsers));

                        alert('User registered:', user);

                        setName('');
                        setEmail('');
                        setPassword('');
                        setConPassword('');
                    } else {
                        alert('Email is already registered');
                    }
                }
                else{
                    alert("Password doesnot matching");
                }
            }
            else{
                alert('Please fill all the fields');
            }
        }
        else{
           
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

            const user = existingUsers.find((user) => user.email === email && user.password === password);

            if (user) {
                alert('Login successful:');
                setName('');
                setEmail('');
                setPassword('');
            }
            else{
                alert('Password is not matching');
            }
        }
    };

    return (
        <div>
        <div className="body1">
            <Navbar/>
            <div className="container1">
                <div className="header1">
                    <div className="text1"> {action} </div>
                    <div className="underline1"></div>
                </div>
                <div className="submit-container1">
                    <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => setAction('Sign Up')}>
                        Sign Up
                    </div>
                    <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={() => setAction('Login')}>
                        Login
                    </div>
                </div>
                <form onSubmit={(e) => submitForm(e)}>
                    <div className="inputs1">
                        {action === 'Login' ? (
                            <div></div>
                        ) : (
                            <div className="input1">
                                <img src={person} alt="" />
                                <input name="name" placeholder="User Name" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                        )}

                        <div className="input1">
                            <img src={emailimg} alt="" />
                            <input type="email" placeholder="Email Address" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="input1">
                            <img src={passwordimg} alt="" />
                            <input type="Password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        {action === 'Login' ? (
                            <div></div>
                        ) : (
                            <div className="input1">
                            <img src={conpass} alt="" />
                            <input type="Password" name="conpassword" placeholder="confirm password" value={conpassword} onChange={(e) => setConPassword(e.target.value)}/>
                            </div>
                        )}
                    </div>
                    {action === 'Sign Up' ? <div></div> : <div className="forgot-password1"> Forgot Password? <Link to='/forgotPassword'><span>Click Here</span></Link> </div>}

                    <div className="submit-container1">
                        <button className="btnsubmit"> {action === 'Sign Up' ? 'Sign Up' : 'Login'} </button>
                    </div>
                </form>
            </div>
            
        </div>
        <Footer/>
        </div>
    );
};

export default Login;