import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ProductBanner = ({title , description , url}) => {
    return <>
        <Wrapper url={url}>
            <h2>{title}</h2>
            <span>{description}</span>
            <div className="buttons-container">
                <Button dark={true} text={'request a demo'}/>
                <Button dark={true} text={'view pricing'}/>
            </div>
        </Wrapper>
    </>;
};

export default ProductBanner;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 6rem;
  padding: 2rem 0;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  overflow: hidden;

  h2{
    color: white;
    font-size: 3rem;
    
  }
  span{
    color: white;
  }

  .buttons-container{
    display: flex;
    gap: 1rem;
  }
`;
