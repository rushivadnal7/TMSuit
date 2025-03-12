import React from 'react'
import { TestimonialsWrapper } from '../wrappers/sectionWrappers/testimonials'
import testimonial1 from '../assets/testimonials/testimonial1.png'
import testimonial2 from '../assets/testimonials/testimonial2.png'
import testimonial3 from '../assets/testimonials/testimonial3.png'

const Testimonials = () => {

    const testimonialData = [
        {
            id: 1,
            image: testimonial1,
            testimonial: `Tmsuit has been our trusted partner through the growth and development of our company, assisting us for years in driving forward success`,
            name: 'Connie D.',
            designation: 'Business management consultant'
        },
        {
            id: 2,
            image: testimonial2,
            testimonial: `Tmsuit makes tedious daily HR processes a breeze! It's fully customizable, providing easy access to the tools necessary for efficient and effective Human Resources management.`,
            name: 'Johnnie G.',
            designation: 'Meeting director'
        },
        {
            id: 3,
            image: testimonial3,
            testimonial: `We discovered Tmsuit and it has been a game-changer for our small company; not only does this software streamline all of our human resources processes, but its efficiency far surpasses any other product in the market.`,
            name: 'Hrithik S.',
            designation: 'Head of HR'
        },
    ]

    return (
        <>
            <TestimonialsWrapper>
                <h2>What they say</h2>
                <h3>Global businesses love Tmsuit</h3>
                <div className="testimonial-cards">
                    {
                        testimonialData.map((testimonial) => (
                            <div className="testimonial-card">
                                <img src={testimonial.image} alt="testimonial" />
                                <p>{testimonial.testimonial}</p>
                                <h4>{testimonial.name}</h4>
                                <h5>{testimonial.designation}</h5>
                            </div>
                        ))
                    }
                </div>
            </TestimonialsWrapper>
        </>
    )
}

export default Testimonials