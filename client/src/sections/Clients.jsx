import React from 'react'
import styled from 'styled-components'
import uideckLogo from '../assets/clients/Uideck.png'
import pagebulbLogo from '../assets/clients/pagebulb.png'
import graggridsLogo from '../assets/clients/graygrids.png'
import linelconsLogo from '../assets/clients/linelcons.png'

const Clients = () => {
    return (
        <>
            <Wrapper>
                <h1>Join over 1,000+ companies around the world <br />
                    that trust the Tmsuit Platform.
                </h1>
                <div className="client-logos-container">
                    <img src={uideckLogo} alt="logo" />
                    <img src={pagebulbLogo} alt="logo" />
                    <img src={linelconsLogo} alt="logo" />
                    <img src={graggridsLogo} alt="logo" />
                    <img src={linelconsLogo} alt="logo" />
                </div>
            </Wrapper>
        </>
    )
}

export default Clients

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    height: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;  
    margin: 4rem 0px;
    text-align: center;

    h1{
        font-size: 2rem;
    }

    .client-logos-container{
        width: 100%;
        display: flex;
        gap: 3rem;
        justify-content: center;
        align-items: center;

        img{
            width: 150px;
            height: auto;
            opacity: 0.4;
            transition: all 0.3s ease;
        }

        img:hover{
            opacity: 1;
        }
    }
`