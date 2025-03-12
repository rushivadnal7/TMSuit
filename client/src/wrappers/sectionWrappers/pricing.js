import styled from "styled-components";

export const PricingWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: start;
  margin: 3rem 0;
`;

export const PricingCard = styled.div`
  width: 30%;
  height: 700px;
  background-color: rgb(221, 237, 249);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 2rem 0;
  gap: 1.5rem;
  text-transform: capitalize;

  span {
    font-size: 1.5rem;
    font-weight: 500;
    color: #051441;
  }

  ul {
    li {
      margin: 1rem 0;
      color: gray;
    }
  }

  &:hover {
    button {
      background-color: gray;
      color: white;
    }
  }
`;

export const PricingButton = styled.button`
  padding: 1rem 2rem;
  font-size: 16px;
  font-weight: bold;
  border-radius: 30px;
  border: 2px solid gray;
  transition: all 0.4s ease;
`;
