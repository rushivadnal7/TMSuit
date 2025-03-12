import styled from "styled-components";

export const FooterWrapper = styled.footer`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    background-color: #eff2f9;
    margin-top: 5.5rem;

    .footer-row-1{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        padding: 20px 2rem;
        align-items: start;

        .first-column{
            text-align: justify;
            img{
                width: 150px;
                height: auto;
            }
        }

        .column{
            display: flex;
            flex-direction: column;
            width: 250px;
            margin: 1rem;
            color: gray;
            
            h2{
                font-size:large;
                font-weight: 700;
            }
        }
    }

    .line-bar{
        height: 2px ;
        border-radius: 5px;
        width: 90%;
        margin: 2rem auto;
        background-color: gray;
    }

    .footer-row-2{
        width: 100%;
        /* padding: 0px ; */
        margin: 2rem 0px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        color: gray;
        /* .social-media-icons{
            display: flex;
            gap: 1rem;

            
            .icon-container{
                width: 2rem;
                height: 2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                padding: 5px;
                background-color: rgba(0,0,0,0.1);
                transition: all 0.2s ease-in;
            }
            
            svg{
                color: gray;
                width: max-content;
                height: max-content;
            }

            svg:hover{
                color: white;
            }

            .icon-container:hover{
                background-color: #0d6efd;
            }
        } */
    }
`

export const SocialMediaIconsWrapper = styled.div`
     display: flex;
            gap: 1rem;

            
            .icon-container{
                width: 2rem;
                height: 2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                padding: 5px;
                background-color: rgba(0,0,0,0.1);
                transition: all 0.2s ease-in;
            }
            
            svg{
                color: gray;
                width: max-content;
                height: max-content;
            }

            svg:hover{
                color: white;
            }

            .icon-container:hover{
                background-color: #0d6efd;
            }
`