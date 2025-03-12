import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const BlogSupport = () => {
    return (
        <>
            <Wrapper>
                <div className="question-text">
                    <span>Do You Have Any Queries ?</span>
                    <p>Share your queries and our representative will get in touch with you</p>
                </div>
                <Button dark={true} text={'Contact us Today!'} />
            </Wrapper>
        </>
    )
}

export default BlogSupport

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #3763eb;
    padding: 4rem 1rem;
    margin-top: 1rem;

    span{
        color: white;
        font-size: 2rem;
        font-weight: 600;
    }
    p{
        color: white;
        font-size: small;
    }


`