import React from 'react'
import styled from 'styled-components'

const VerticalCard = ({ data }) => {
    return (
        <>
            <Wrapper>
                <img src={data.image} alt={data.title} />
                <h2>{data.title}</h2>
                {
                    data.description && (<p>{data.description}</p>)
                }

            </Wrapper>
        </>
    )
}

export default VerticalCard

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
    border-radius: 15px;

    &:hover{
        box-shadow: 2px 5px 30px rgba(0,0,0,0.2);
    }

    h2{
        font-size: 1rem;
        color: #051441;
    }
    p{
        color: gray;
        font-size: smaller;
        max-width: 200px;
    }
`