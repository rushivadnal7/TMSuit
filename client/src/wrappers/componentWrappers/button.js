import styled from "styled-components";
export const ButtonWrapper = styled.button`
    padding: 1rem;
    background: ${({ dark }) => (!dark ? `linear-gradient(to left, #3763eb 0%, #6f58e8 50.39%, #3763eb 100%)` :
        `linear-gradient(to left, #03258f 0%, #180b5c 50.39%, #0138e5 100%)`)};
    border-radius: 30px;
    border: none;
    transition: all 0.3s ease;
    color: white;
    font-size: large;
    text-transform: capitalize;

    &:hover{
        box-shadow: 1px 2px 30px rgba(0,0,0,0.3);
        background: ${({ dark }) => (!dark ? `linear-gradient(to left, #6f58e8 0%, #3763eb 50.39% , #6f58e8 100%)` :
        `linear-gradient(to left, #180b5c 0%, #03258f 50.39% , #180b5c 100%)`)};
    }
`