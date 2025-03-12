import styled from "styled-components";

export const AboutWrappers = styled.section`
    width: 100%;
    height: max-content;
    margin-top: 5.5rem;

    .aboutus-banner{
        width: 100%;
        height: 350px;
        background-image: url('https://www.tmsuit.com/assets/img/bg/about-us.webp');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        color: white;
    }

    .about-us-text{
        h2{
            text-align: center;
            font-size: 2rem;
        }
    }
    .paragraph{
        width: 80%;
        margin: 4rem auto;
        text-align: justify;
        color: gray;

        h2{
            color: black;
        }
    }

    .features{
        width: 100%;
        height: max-content;
        margin-top: 5rem;
        text-align: center;

        h2{
            font-size: 2rem;
            margin: 2rem 0;
        }

        .feature-cards{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            margin-top: 2rem;

            .feature-card{
                width: 300px;
                height: 250px;
                padding: 20px;
                border: 2px solid lightgray;
                border-radius: 10px;


                img{
                    width: auto;
                    height: 100px;
                }

                p{
                    text-align: justify;
                    color: gray;
                    font-size: small;
                }
            }
        }
    }
`