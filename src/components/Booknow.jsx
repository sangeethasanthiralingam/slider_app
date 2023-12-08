import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './../style/Booknow.css';

class Booknow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            contact: "",
            address: "",
            carModel: "",
            carColor: "",
            carNumber: "",
            departureDate: new Date(),
            departureTime: "12:30",
            returnDate: new Date(),
            returnTime: "12:30",
            returnDate: "",
            returnTime: "",
            paymentMethod: "card",
            successMessage: ""
        };
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleDateChange = (date, name) => {
        this.setState({
            [name]: date
        });
    }

    handleTimeChange = (time, name) => {
        this.setState({
            [name]: time
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Store data in local storage
        const bookingData = { ...this.state };
        localStorage.setItem("bookingData", JSON.stringify(bookingData));

        // Show success message to the user
        this.setState({
            successMessage: "Booking successfully!"
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Navbar />
                    <div className="booking-body">
                        <div className="booking-form">
                            <h2 className="booknow">Book Now</h2>
                            <form className="booking-inputs" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <div className="input-field">
                                        <label for="name">Name:</label>
                                        <input type="text" id="name" name="name" required />
                                    </div>
                                    <div className="input-field">
                                        <label for="email">Email:</label>
                                        <input type="email" id="email" name="email" required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-field">
                                        <label for="contact">Contact:</label>
                                        <input type="tel" id="contact" name="contact" required />
                                    </div>
                                    <div className="input-field">
                                        <label for="address">Address:</label>
                                        <input type="text" id="address" name="address" required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-field">
                                        <label for="carModel">Car Model:</label>
                                        <input type="text" id="carModel" name="carModel" required />
                                    </div>
                                    <div className="input-field">
                                        <label for="carColor">Car Color:</label>
                                        <input type="text" id="carColor" name="carColor" required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-field">
                                        <label for="carNumber">Car Number:</label>
                                        <input type="text" id="carNumber" name="carNumber" required />
                                    </div>
                                    <div className="input-field">
                                        <label for="paymentMethod">Payment:</label>
                                        <select id="paymentMethod" name="paymentMethod" required>
                                            <option value="card">Card</option>
                                            <option value="cash">Cash</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-field">
                                        <label htmlFor="returnDate">Return Date:</label>
                                        <DatePicker
                                            selected={this.state.returnDate}
                                            onChange={(date) => this.handleDateChange(date, "returnDate")}
                                            dateFormat="MM/dd/yyyy"
                                            required
                                        />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="returnTime">Return Time:</label>
                                        <input text="time" id="returnTime" name="returnTime"></input>

                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-field">
                                        <label htmlFor="departureDate">Departure Date:</label>
                                        <DatePicker
                                            selected={this.state.departureDate}
                                            onChange={(date) => this.handleDateChange(date, "departureDate")}
                                            dateFormat="MM/dd/yyyy"
                                            required
                                        />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="departureTime">Departure Time:</label>
                                        <input text="time" id="departureTime" name="departureTime"></input>
                                    </div>
                                </div>
                                {this.state.successMessage && (
                                    <div className="success-message">
                                        {this.state.successMessage}
                                    </div>
                                )}
                                <div className="form-group">
                                    <button type="submit" className="submit-btn">Submit</button>
                                    <button type="button" className="cancel-btn"><a href="/">Cancel</a></button>
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