import styled from "styled-components";

export const HeroWrapper = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: whitesmoke;
    display: flex;
    margin-top: 4rem;

    .left-container{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;

        h1{
            font-size: 2rem;
            font-weight: bolder;
            margin: 0;
        }

        span{
            font-size: small;
            color: gray;
        }

        .buttons-container{
            display: flex;
            gap: 1rem;
        }
    }

    .right-container{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        position: relative;

        .hero-image{
            width: 90%;
            height: max-content;
        }
        .hero-element{
            position: absolute;
            top: 60%;
            left: 0;
            z-index: 100;

        }
    }


`