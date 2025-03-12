import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const HeaderSection = ({ titles }) => {
    const navigate = useNavigate()

    let title1 = titles[0], title2
    if (titles.length > 1) {
        title2 = titles[1].trim().replace(/-/g, ' ').toLowerCase();
    }

    return (
        <>
            <Wrapper>
                <h1>{title2 ? title2 : title1}</h1>
                <span className='home' onClick={() => navigate('/')}>Home /</span>
                <span className={title2 ? 'blog' : 'current'} onClick={title2 ? () => navigate('/blog') : ''}>{title1}/</span>
                <span className={title2 ? 'current' : ''}  >{title2 && title2}</span>
            </Wrapper>
        </>
    )
}

export default HeaderSection

const Wrapper = styled.div`
margin-top: 5.5rem;
    width: 100%;
    padding: 4rem 6rem;
    background-image: url('https://www.tmsuit.com/assets/img/bg/common-bg.svg');
    background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    h1{
        color: white;
        width: 80%;
        text-transform: capitalize;
        font-size: 1.5rem;
        margin: 30px 0;
    }

    .home , .blog{
        color: white;
        cursor: pointer;
    }
    .current{
        color: lightgray;
        margin-left: 5px;
        font-size: medium;
    }


`