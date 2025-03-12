import React from 'react'
import StandardLayout from '../layout/StandardLayout'
import Hero from '../sections/Hero'
import Feature from '../sections/Feature'
import HomeAbout from '../sections/HomeAbout'
import Clients from '../sections/Clients'
import Testimonials from '../sections/Testimonials'
import Subscribe from '../sections/Subscribe'

const Home = () => {
    return (
        <>
            <StandardLayout>
                <Hero />
                <Feature />
                <HomeAbout />
                <Clients />
                <Testimonials />
                <Subscribe buttonText={'contact us today!'} title={'Do You Have Any Queries ?'} description={'Share your queries and our representative will get in touch with you'} />
            </StandardLayout>
        </>
    )
}

export default Home

