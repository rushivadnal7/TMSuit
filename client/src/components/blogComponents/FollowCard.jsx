import React from 'react'
import { SocialMediaIcons } from '../Footer'
import styled from 'styled-components'

const FollowCard = () => {
    return (
        <>
            <Wrapper>
                <h1>Follow us</h1>
                <SocialMediaIcons />
            </Wrapper>
        </>
    )
}

export default FollowCard

const Wrapper = styled.div`
    grid-area: follow;
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