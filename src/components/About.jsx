import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './../style/About.css';

class About extends Component {
    render() {

        return (
            <div>
                <div className="container">
                    <Navbar />
                    <div className="about-us">
                        <h2 className="about-header">ABOUT US</h2>
                        <div className="about-container">
                            Welcome to Jet Park, where innovation meets convenience in the world of parking solutions.
                            At Jet Park, we understand that every journey begins with a smooth parking experience.
                            Our mission is to revolutionize the way you park, ensuring that every arrival and
                            departure is seamless and stress-free.
                        </div>
                        <section id="who-we-are">
                            <h2>Who We Are</h2>
                            <p>Jet Park isn't just a car park; it's a destination designed with you in mind. We are a team of passionate individuals dedicated to reshaping the parking industry by combining cutting-edge technology with a commitment to exceptional service. Our vision is to create a parking experience that not only meets but exceeds your expectations.</p>
                        </section>

                        <section id="what-sets-us-apart">
                            <h2>What Sets Us Apart</h2>
                            <ul>
                                <li><strong>Technology at Your Fingertips:</strong> We leverage state-of-the-art technology to make parking as effortless as possible.</li>
                                <li><strong>Secure and Smart:</strong> Your vehicle's safety is our top priority. Our facilities are equipped with advanced security features.</li>
                                <li><strong>Customer-Centric Approach:</strong> Jet Park is more than just a place to park your car; it's a service tailored to your needs.</li>
                            </ul>
                        </section>

                        <section id="our-commitment">
                            <h2>Our Commitment</h2>
                            <p>Jet Park is committed to providing you with a parking experience that goes beyond the ordinary. We continuously strive to innovate and improve, ensuring that every moment with us contributes to the overall enjoyment of your journey.</p>
                        </section>
                    </div>

                <Footer />
                </div>
            </div>
        );
    }
}
export default About;