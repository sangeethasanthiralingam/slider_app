import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Testimonial extends Component {
    render() {

        
        const testimonials = [
            {
                id: 1,
                name: 'John Doe',
                occupation: 'Business Owner',
                testimonialText:
                    'I was amazed by the convenience and security of the parking service. The valet service was exceptional, and I felt reassured leaving my car in their care.',
                image: 'https://randomuser.me/api/portraits/men/1.jpg',

            },
            {
                id: 2,
                name: 'Jane Smith',
                occupation: 'Marketing Manager',
                testimonialText:
                    'The parking facilities were clean and well-organized. I appreciated the ease of booking and the promptness of the attendants.',
                image: 'https://randomuser.me/api/portraits/men/2.jpg',
            },
            {
                id: 3,
                name: 'Michael Johnson',
                occupation: 'Travel Enthusiast',
                testimonialText:
                    'I\'ve used many parking services, but this one stands out. The staff was friendly and professional, making my experience hassle-free.',
                image: 'https://randomuser.me/api/portraits/men/3.jpg',
            },
            {
                id: 4,
                name: 'Emily Davis',
                occupation: 'Freelancer',
                testimonialText:
                    'I highly recommend this parking service. The rates were competitive, and the location was convenient. I felt my car was in safe hands throughout my trip.',
                image: 'https://randomuser.me/api/portraits/men/4.jpg',

            },
            {
                id: 5,
                name: 'Sophie Brown',
                occupation: 'Student',
                testimonialText:
                    'As a student, affordability and safety are crucial. This parking service exceeded my expectations in both aspects. I will definitely use it again.',
                image: 'https://randomuser.me/api/portraits/men/5.jpg',
            },
            {
                id: 6,
                name: 'David Miller',
                occupation: 'Retiree',
                testimonialText:
                    'Using this parking service made my travel stress-free. The attendants were helpful, and the facility was well-maintained.',
                image: 'https://randomuser.me/api/portraits/men/6.jpg',
            },
            // Add more testimonials as needed
        ];


        return (
            <div>
            <Navbar/>
            <div className="testimonial">
                <h2>Customer Reviews</h2>
                <div className="testimonial-list">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="card-content">
                                <div className="testimonial-info">
                                    <img
                                        src={testimonial.image}
                                        alt={`${testimonial.name}'s profile`}
                                        className="testimonial-img"
                                    />
                                </div>

                                <blockquote>
                                    <p className="testimonial-text">"{testimonial.testimonialText}"</p>
                                    <span className="testimonial-author">{testimonial.name}, {testimonial.occupation}</span>
                                </blockquote>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
            <Footer/>
            </div>
        );
    }
}

export default Testimonial;
