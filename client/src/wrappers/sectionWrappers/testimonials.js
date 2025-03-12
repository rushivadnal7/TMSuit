import styled from 'styled-components'

export const TestimonialsWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2{
        font-size: 2rem;
        color: #3763eb;
    }

    .testimonial-cards{
        margin-top: 4rem;
        width: 100%;
        height: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        

        .testimonial-card{
            width: 300px;
            height: 350px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: justify;
            padding: 20px;
            border-radius: 10px;
            transition: all 0.4s ease;

            h5{
                color: gray;
                font-weight:500;
            }

            &:hover{
                box-shadow: 2px 4px 30px rgba(0,0,0,0.03);
            }
        }
    }
`