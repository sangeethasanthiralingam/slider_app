import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './../style/Booknow.css';

class Booknow extends Component {
    render() {

        return (
            <div>
                <div className="container">
                    <Navbar />
                    <div className="booking-body">
                    <div class="booking-form">
                        <h2 className="booknow">Book Now</h2>
                        <form action="#" method="post">
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input type="text" id="name" name="name" required/>
                            </div>

                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" id="email" name="email" required/>
                            </div>

                            <div class="form-group">
                                <label for="contact">Contact:</label>
                                <input type="tel" id="contact" name="contact" required/>
                            </div>

                            <div class="form-group">
                                <label for="address">Address:</label>
                                <input type="text" id="address" name="address" required/>
                            </div>

                            <div class="form-group">
                                <label for="carModel">Car Model:</label>
                                <input type="text" id="carModel" name="carModel" required/>
                            </div>

                            <div class="form-group">
                                <label for="carColor">Car Color:</label>
                                <input type="text" id="carColor" name="carColor" required/>
                            </div>

                            <div class="form-group">
                                <label for="carNumber">Car Number:</label>
                                <input type="text" id="carNumber" name="carNumber" required/>
                            </div>

                            <div class="form-group">
                                <label for="parkingDate">Parking Date:</label>
                                <input type="date" id="parkingDate" name="parkingDate" required/>
                            </div>

                            <div class="form-group">
                                <label for="parkingTime">Parking Time:</label>
                                <input type="time" id="parkingTime" name="parkingTime" required/>
                            </div>

                            <div class="form-group">
                                <label for="departureDateTime">Departure Time & Date:</label>
                                <input type="datetime-local" id="departureDateTime" name="departureDateTime" required/>
                            </div>

                            <div class="form-group">
                                <label for="paymentMethod">Payment Method:</label>
                                <select id="paymentMethod" name="paymentMethod" required>
                                    <option value="card">Card</option>
                                    <option value="cash">Cash</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}
export default Booknow;