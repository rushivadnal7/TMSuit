import React from 'react'
import StandardLayout from '../layout/StandardLayout'
import { AboutWrappers } from '../wrappers/sectionWrappers/about'
import innovationFeatureImg from '../assets/about/innovation.png'
import customizeSolutionFeatureImg from '../assets/about/customizeSolution.png'
import supportFeatureImg from '../assets/about/support.png'
import parse from 'html-react-parser';

const About = () => {

    const featuresContent = [
        {
            id: 1,
            image: innovationFeatureImg,
            title: 'Innovation',
            description: `It is essential to continuously generate innovative ideas for enhancing customer service, whether that be through the creation of new features or through better connectivity with customers.`
        },
        {
            id: 2,
            image: customizeSolutionFeatureImg,
            title: 'Customise Solution',
            description: `We thrive on utilizing various automated technologies for businesses and creating tailor-made solutions for them.`
        },
        {
            id: 3,
            image: supportFeatureImg,
            title: 'Support',
            description: `We strive to give every customer the highest level of service as if they were royalty.`
        },
    ]

    const paragraphs = [
        {
            id: 1,
            className: 'about-us-text',
            title: 'About Us',
            description: ` Welcome to TMSuit, your premier destination for efficient and reliable time tracking solutions. At TMSuit, we understand the importance of time management in today's fast-paced world, and we're dedicated to providing you with the tools you need to streamline your workflow, boost productivity, and achieve your goals. <br /><br />


                            Our journey began with a simple idea: to create a time tracking software that is intuitive, powerful, and adaptable to the unique needs of every user. With years of experience in software development and a passion for innovation, our team set out to build TMSuit from the ground up, incorporating the latest technologies and best practices to deliver a cutting-edge solution that exceeds expectations. <br /><br />


                            What sets TMSuit apart is our commitment to simplicity and usability. We believe that time tracking should be effortless, not a burden. That's why we've designed TMSuit with a clean and intuitive interface that makes it easy for anyone to track their time accurately, whether you're a freelancer, a small business owner, or part of a large enterprise. <br /><br />


                            But TMSuit is more than just a time tracker – it's a comprehensive toolset for managing your time more effectively. From customizable project tracking to detailed reports and analytics, TMSuit empowers you to take control of your schedule and make informed decisions about how you spend your time. <br /><br />


                            At TMSuit, we're also committed to customer satisfaction. We take pride in providing exceptional support to our users, whether you have a question about a feature or need help troubleshooting an issue. Your success is our success, and we're here to support you every step of the way. <br /><br />


                            Join the thousands of satisfied users who trust TMSuit to help them work smarter, not harder. Experience the difference for yourself and unlock your full potential with TMSuit – the ultimate time tracking solution. <br /><br />`
        },
        {
            id: 2,
            className: 'our-vission-text',
            title: 'Our Vission',
            description: `
                            Welcome to TMSuit, your premier destination for efficient and reliable time tracking solutions. At TMSuit, we understand the importance of time management in today's fast-paced world, and we're dedicated to providing you with the tools you need to streamline your workflow, boost productivity, and achieve your goals. <br /><br />


                            Our journey began with a simple idea: to create a time tracking software that is intuitive, powerful, and adaptable to the unique needs of every user. With years of experience in software development and a passion for innovation, our team set out to build TMSuit from the ground up, incorporating the latest technologies and best practices to deliver a cutting-edge solution that exceeds expectations. <br /><br />


                            What sets TMSuit apart is our commitment to simplicity and usability. We believe that time tracking should be effortless, not a burden. That's why we've designed TMSuit with a clean and intuitive interface that makes it easy for anyone to track their time accurately, whether you're a freelancer, a small business owner, or part of a large enterprise. <br /><br />


                            But TMSuit is more than just a time tracker – it's a comprehensive toolset for managing your time more effectively. From customizable project tracking to detailed reports and analytics, TMSuit empowers you to take control of your schedule and make informed decisions about how you spend your time. <br /><br />


                            At TMSuit, we're also committed to customer satisfaction. We take pride in providing exceptional support to our users, whether you have a question about a feature or need help troubleshooting an issue. Your success is our success, and we're here to support you every step of the way. <br /><br />


                            Join the thousands of satisfied users who trust TMSuit to help them work smarter, not harder. Experience the difference for yourself and unlock your full potential with TMSuit – the ultimate time tracking solution. <br /><br />`,
        },
        {
            id: 3,
            className: 'our-mission-text',
            title: 'Our Mission',
            description: `
                            Our mission at TMSuit is to empower individuals and organizations to take control of their time, increase productivity, and achieve their goals. We are committed to providing innovative time tracking solutions that are user-friendly, reliable, and customizable to meet the diverse needs of our users. <br /><br />


                            Through our software, we aim to simplify the time tracking process, allowing users to easily monitor their activities, track project progress, and analyze their time usage for greater insights and efficiency. We strive to enable our users to make informed decisions about how they allocate their time, ultimately helping them optimize their workflow and maximize their productivity. <br /><br />


                            At TMSuit, we are dedicated to fostering a culture of continuous improvement and customer satisfaction. We listen to our users' feedback and work tirelessly to enhance our software, ensuring that it remains at the forefront of time tracking technology. Together, we can transform the way people manage their time and unlock their full potential. <br /><br />`
        }
    ]

    return (
        <>
            <StandardLayout>
                <AboutWrappers>
                    <div className="aboutus-banner">
                        <h1>About us</h1>
                    </div>
                    {
                        paragraphs.map((paragraph) =>
                        (
                            <div key={paragraph.id} className={`${paragraph.className} paragraph`}>
                                <h2>{paragraph.title}</h2>
                                <p>{parse(paragraph.description)}</p>
                            </div>
                        )
                        )
                    }
                    <div className="features">
                        <h2>
                            Features
                        </h2>
                        <div className="feature-cards">
                            {
                                featuresContent.map((feature) => (
                                    <div key={feature.id} className="feature-card">
                                        <img src={feature.image} alt={feature.title} />
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </AboutWrappers>
            </StandardLayout>
        </>
    )
}

export default About