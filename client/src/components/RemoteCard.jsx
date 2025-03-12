import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RemoteCard = ({ data }) => {
    const [cardFlow, setCardFlow] = useState('');

    useEffect(() => {
        setCardFlow(data.id % 2 === 0 ? 'even' : 'odd');
    }, [data.id]);

    return (
        <RemoteWrapper className={cardFlow}>
            <div className="first-container">
                <span>{data.title}</span>
                <p>{data.description}</p>
                <ul>
                    {data.list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="second-container">
                <img src={data.image} alt="banner-image" />
            </div>
        </RemoteWrapper>
    );
};

export default RemoteCard;


const RemoteWrapper = styled.div`
    width: 100%;
    height: 450px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 5rem 0px;

    &.even {
        flex-direction: row-reverse;
    }
    
    &.odd {
        flex-direction: row;
    }

    .first-container{
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 1rem;
        padding: 20px 10px;
        transition: all 0.3s ease;
        text-align: justify;

        span{
            font-size: 1.5rem;
            font-weight: 600;
        }
        p{
            color: gray;
            font-size: medium;
        }
        
        .buttons-container-row{
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: start;
        }
        
        &:hover{
            border-radius: 5px;
            box-shadow: 1px 4px 20px rgba(0,0,0,0.1);
        }
    }
    
    .second-container{
        width: 40%;
        transition: all 0.3s ease;
        height: 400px;
        &:hover{
            border-radius: 5px;
            box-shadow: 2px 3px 20px rgba(0,0,0,0.1);
        }
        
        img{
            border-radius: 5px;
            width: 100%;
            height: 100%;

        }
    }
`