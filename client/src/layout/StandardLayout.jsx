import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'

const StandardLayout = ({ children }) => {
    return (
        <>
            <StandLayoutWrapper>
                <Navbar />
                {children}
                <Footer />
            </StandLayoutWrapper>
        </>
    )
}

export default StandardLayout

const StandLayoutWrapper = styled.section`
    background-color: whitesmoke;
`