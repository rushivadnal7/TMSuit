import React from 'react'
import styled from 'styled-components'

const BlogFeatures = () => {
    const features = [
        "Automated Time Tracking",
        "Activity Reporting",
        "Employee Monitoring",
        "Leave Management",
        "Time Reports",
        "Invoices",
        "Project Management",
        "Achievements",
        "Screenshot Report"
    ];

    return (
        <>
            <Wrapper>
                <h1>
                    Features
                </h1>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </Wrapper>
        </>
    )
}

export default BlogFeatures

const Wrapper = styled.div`
    grid-area: features;
    width: 80%;
    height: max-content;
    margin: 1rem 0 ;
    padding: 20px;
    border: 0.5px solid rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-radius: 15px;
    align-items: start;
    transition: all 0.4s ease;

    &:hover{
        box-shadow: 2px 5px 30px rgba(0,0,0,0.1);
    }

    h1{
        margin: 1rem 0;
    }
`