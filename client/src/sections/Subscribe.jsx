import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const Subscribe = ({ title, description, buttonText }) => {
    return (
        <>
            <Wrapper>
                <div className="subscribe-text">
                    <h2>{title}</h2>
                    {
                        description && <span>{description}</span>
                    }
                </div>
                <div className="action-button">
                    <Button dark={true} text={buttonText} />
                </div>
            </Wrapper>
        </>
    )
}

export default Subscribe

const Wrapper = styled.div`
    width: 100%;
    padding: 4rem 0;
    margin-top: 3rem;
    background-image: url('https://www.tmsuit.com/assets/img/bg/common-bg.svg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-around;
    align-items: center;


    .subscribe-text{
        color: #fff;

        h2{
            margin: 20px 0px;
            font-size: 1.5rem;
            max-width: 60%;
        }
        span{
            font-size: smaller;
            margin: 20px 0px;
        }
    }





`