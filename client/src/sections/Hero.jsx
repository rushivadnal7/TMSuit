import React from 'react'
import { HeroWrapper } from '../wrappers/sectionWrappers/hero'
import Button from '../components/Button'
import heroImage from '../assets/hero/hero-image.png'
import heroImageElement from '../assets/hero/heroImageElements.png'

const Hero = () => {
    return (
        <HeroWrapper>
            <div className="left-container">
                <h1>Employee Monitoring & <br /> Time Tracking Software</h1>
                <span>for Work From Home, Remote, Freelancers, In-house Teams</span>
                <div className="buttons-container">
                    <Button dark={true} text={'Get started'} />
                    <Button text={'Book a demo'} />
                </div>
            </div>
            <div className="right-container">
                <img src={heroImage} className='hero-image' alt="hero-image" />
                <img src={heroImageElement} className='hero-element' alt="hero-image-element" />
            </div>
        </HeroWrapper>
    )
}

export default Hero