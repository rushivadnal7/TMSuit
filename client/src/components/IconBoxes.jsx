import React from 'react'
import styled from 'styled-components'


const IconBoxes = ({ data }) => {
    return (
        <Wrapper>
            <img src={data.image} alt={data.title} />
            <h2>{data.title}</h2>
        </Wrapper>)
}

export default IconBoxes

const Wrapper = styled.div`
    margin-top: 2rem;
    width: max-content;
    height: max-content;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    justify-content: center;
    border: 1px solid rgba(0,0,0,0.2);
    transition: all 0.4s ease;
    border-radius: 30px;

    &:hover{
        box-shadow: 2px 5px 30px rgba(0,0,0,0.2);
    }

    h2{
        font-size: 1rem;
        color: #051441;
    }
`