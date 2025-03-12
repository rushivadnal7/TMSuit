import styled from "styled-components";

export const FeatureWrapper = styled.section`
  width: 100vw;
  height: max-content;
  text-align: center;
`;

export const FeatureOne = styled.div`
    width: 100%;
    height: max-content;
  h1 {
    font-size: 2.5rem;
    font-weight: bolder;
    margin: 1rem;
  }

  .feature-images-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin: 2rem;

    h2 {
      font-weight: 600;
      font-size: medium;
      color: gray;
    }
  }
`;


export const FeatureSecond = styled.div`
    width: 100%;
    height: max-content;

    .feature-2-heading{
        width: 50%;
        margin: 5rem auto;

        h2{
            font-size: 1.5rem;
            color: #3763eb;
        }
        h3{
            font-size: 2rem;
        }
        span{
            font-size: smaller;
            color: gray;
        }
    }
`
export const Feature2LeftToRightRow = styled.div`
    width: 100%;
    height: 400px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 5rem 0px;

    .first-container{
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 1rem;
        padding: 20px 10px;
        transition: all 0.3s ease;
        text-align: justify;

        span{
            font-size: 2rem;
            font-weight: 600;
        }
        p{
            color: gray;
            font-size: medium;
        }
        
        .buttons-container-row{
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: start;
        }
        
        &:hover{
            border-radius: 5px;
            box-shadow: 1px 4px 20px rgba(0,0,0,0.1);
        }
    }
    
    .second-container{
        width: 40%;
        transition: all 0.3s ease;
        height: 400px;
        &:hover{
            border-radius: 5px;
            box-shadow: 2px 3px 20px rgba(0,0,0,0.1);
        }
        
        img{
            border-radius: 5px;
            width: 100%;
            height: 100%;

        }
    }
`
export const Feature2RightToLeftRow = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    gap: 2rem;
    padding: 20px;
    margin: 5rem 0px;

    .first-container{
        width: 40%;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 1rem;
        padding: 20px 10px;
        transition: all 0.3s ease;
        text-align: justify;

        span{
            font-size: 2rem;
            font-weight: 600;
        }
        p{
            color: gray;
            font-size: medium;
        }
        
        .buttons-container-row{
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: start;
        }
        
        &:hover{
            border-radius: 5px;
            box-shadow: 1px 4px 20px rgba(0,0,0,0.1);
        }
    }
    
    .second-container{
        width: 40%;
        transition: all 0.3s ease;
        height: 400px;
        &:hover{
            border-radius: 5px;
            box-shadow: 2px 3px 20px rgba(0,0,0,0.1);
        }
        
        img{
            border-radius: 5px;
            width: 100%;
            height: 100%;

        }
    }
` 