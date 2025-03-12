import React from "react";
import styled from "styled-components";

const TitleBanner = ({ url, title, description }) => {
    return (
        <BannerWrapper url={url}>
            <h1>{title}</h1>
            {
                description && <p>{description}</p>
            }
        </BannerWrapper>
    );
};

export default TitleBanner;

const BannerWrapper = styled.div`
  width: 100%;
  height: 250px;
  padding: 20px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 7rem; 
  color:white;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  h1{
    font-size: 2.5rem;
  }
  p{
    font-size: 1.5rem;
  }
`;
