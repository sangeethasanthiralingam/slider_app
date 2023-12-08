import { Component } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Navbar from "./Navbar";
import Footer from "./Footer";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            Subject: '',
            Message: ''
        };
    }
    handleChange = (e, field) => {
        this.setState({ [field]: e.target.value });
    };

    handleSubmit = () => {
        const { name, email, Subject, Message } = this.state;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const usernamePattern = /^[a-zA-Z0-9_]{3,16}$/;

        if (name === '' || email === '' || Subject === '' || Message === '') {
            console.log('Please fill all the fields');
        } else if (!usernamePattern.test(name)) {
            console.log('Please enter a valid name.');
            return alert("Please enter a valid name.");
        } else if (!emailPattern.test(email)) {
            console.log('Please enter a valid email address.');
            return alert("Please enter a valid email address.");
        } else {
            console.log("name:", name);
            console.log("email:", email);
            console.log("Subject:", Subject);
            console.log("Message:", Message);
            console.log('Form submitted successfully!');
            alert("Form Submitted Successfully!");
        }
    };
    render() {
        return (
            <div className="contact">
            <Navbar/>
            <h2 className="contact-heading">CONTACT&nbsp;US</h2>
            <div className="contact-details">
                <div className="contact-us-outer-div">
                    <div className="contact-us-inner-div">
                        <div className="h3-contact-us">
                            <h3 className="h3-div" style={{ paddingRight: '16px' }}>Contact&nbsp;Us</h3>
                        </div>
                        <div className="phone-div">
                            <div className="phone-content">
                                <div className="phone-icon-div">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className="number">
                                    <div>
                                        <p>
                                            <a href="tel:+94771234567">
                                                (+94) 77 1234 567
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="email-div">
                            <div className="email-content">
                                <div className="email-icon-div">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div className="email">
                                    <div>
                                        <p>
                                            <a href="mailto:jetparkbooking@gmail.com">
                                                jetparkbooking@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="location-div">
                            <div className="location-content">
                                <div className="location-icon-div">
                                    <FontAwesomeIcon icon={faMapMarker} />
                                </div>
                                <div className="location">
                                    <div>
                                        <p> Jet Park</p>
                                        <p>Palaly </p>
                                        <p>Jaffna.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="social-icon-div">
                            <h3>Follow Us</h3>
                            <a href="https://www.facebook.com/" style={{ display: 'flex', justifyContent: 'center' }}>
                                <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '32px' }} />
                            </a>
                        </div>
                    </div>
                    <div className="contact-us-inner-div2">
                        <div className="h3-contact-us">
                            <h3 className="h3-div" style={{ paddingRight: '16px' }}>Get&nbsp;In&nbsp;Touch</h3>
                        </div>
                        <div className="containerDivStyle">
                            <form className="formStyle" method="post">
                                <label className="labelStyle" htmlFor="Name" style={{}}>
                                    Name:
                                    <input
                                        type="text"
                                        className="inputStyle "
                                        value={this.state.name}
                                        onChange={(e) => this.handleChange(e, "name")}
                                    />
                                </label>
                                <label className="labelStyle" htmlFor="Email ">
                                    Email:
                                    <input
                                        type="text"
                                        className="inputStyle "
                                        value={this.state.email}
                                        onChange={(e) => this.handleChange(e, "email")}
                                    />
                                </label>
                                <label className="labelStyle" htmlFor="Subject ">
                                    Subject:
                                    <input type="Text" className="inputStyle "
                                        value={this.state.Subject}
                                        onChange={(e) => this.handleChange(e, "Subject")}
                                    />
                                </label>
                                <label className="labelStyle" htmlFor="Message ">
                                    Message:
                                    <textarea type="textarea" className="inputStyle "
                                        value={this.state.Message}
                                        onChange={(e) => this.handleChange(e, "Message")}
                                    />
                                </label>
                                <label htmlFor="submit" onClick={this.handleSubmit}>
                                    <input type="button" value="Submit" className="submitButtonStyle" />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>
        );
    }
}
export default Contact;