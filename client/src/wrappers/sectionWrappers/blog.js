import styled from "styled-components";

export const BlogWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas:
    "blog recent"
    "blog follow"
    "blog features";
    grid-template-columns: 70% 30%;
    position: relative;
    padding: 5rem 0;

    .blogs{
        width: 80%;
        display: flex;
        flex-direction: column;
        grid-area: blog;
        padding-left: 4rem;
    }
    `

export const BlogCardWrapper = styled.div`
    width: 100%;
    padding-bottom: 6rem;
    cursor: pointer;

    .image-container{
        width: 100%;
        overflow: hidden;
        border-radius: 10px;
        
        img{
            width: 100%;
            border-radius: 10px;
            transition: all .3s ease-out 0s;
            
        }
        img:hover{
            transform: scale(1.3) rotate(-7deg);
        }
    }

    h2{
        margin-top: 20px;

        &:hover{
            color: #03258f;
        }
    }

    p,span{
        font-size: small;
        color: gray;
    }
`