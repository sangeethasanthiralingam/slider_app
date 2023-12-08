import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './../style/Service.css';

class Service extends Component {
    render() {

        return (
            <div>
                <div className="container">
                    <Navbar />
                    <h3 className="service">SERVICE</h3>
                    <div className="services-container">
                        <div className="service-card">
                            <h3>Smart Parking Solutions</h3>
                            <p>Experience the future of parking with our smart parking solutions. From real-time space availability to hassle-free reservations, our technology-driven approach ensures that you spend less time searching for a spot and more time enjoying your destination.</p>
                            <button>Learn More</button>
                        </div>

                        <div className="service-card">
                            <h3>Secure Parking Facilities</h3>
                            <p>Your peace of mind is our priority. Our parking facilities are equipped with advanced security measures, including 24/7 surveillance, secure access controls, and well-lit surroundings. Trust us to keep your vehicle safe while you go about your day.</p>
                            <button>Learn More</button>
                        </div>

                        <div className="service-card">
                            <h3>Valet Parking Services</h3>
                            <p>For a touch of luxury and convenience, indulge in our valet parking services. Our professional and courteous valets ensure a seamless transition from arrival to departure, allowing you to focus on what matters most.</p>
                            <button>Learn More</button>
                        </div>

                        <div className="service-card">
                            <h3>Event Parking Solutions</h3>
                            <p>Hosting an event? Let Jet Park handle the parking logistics. Our event parking solutions are tailored to accommodate large volumes of vehicles, ensuring a smooth flow of traffic and a positive experience for attendees.</p>
                            <button>Learn More</button>
                        </div>

                        <div className="service-card">
                            <h3>Electric Vehicle Charging Stations</h3>
                            <p>Driving towards a sustainable future? So are we. Discover our electric vehicle charging stations, making it convenient for eco-conscious drivers to power up while parked.</p>
                            <button>Learn More</button>
                        </div>

                        <div className="service-card">
                            <h3>Customer Support</h3>
                            <p>Have questions or need assistance? Our dedicated customer support team is available around the clock to address your queries and ensure your experience with Jet Park is nothing short of exceptional.</p>
                            <button>Learn More</button>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        );
    }
}
export default Service;