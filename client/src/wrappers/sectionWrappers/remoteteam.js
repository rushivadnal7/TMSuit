import styled from "styled-components";

export const RemoteWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContentSection = styled.section`
    text-align: center;
    margin: 40px 0;
`;

export const SectionTitle = styled.h2`
    font-size: 28px;
    font-weight: bold;
    color: #051441;
    margin-top: 2.5rem;
`;

export const SectionText = styled.p`
    font-size: 16px;
    color: gray;
    max-width: 800px;
    margin: 1rem auto;
`;

export const FeaturesGrid1 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    max-width: 800px;
    margin: auto;
    padding: 20px;
`;
export const FeaturesGrid2 = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 800px;
    margin: auto;
    padding: 20px;
`;

export const FeatureCardWrapper1 = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #f9f9f9;
`;

export const FeatureIcon1 = styled.img`
width: 40px;
height: 40px;
margin-right: 15px;
`;

export const FeatureCardWrapper2 = styled.div`
    text-align: center;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    max-width: 350px;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const FeatureIcon2 = styled.img`
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
`;

export const FeatureTitle = styled.h3`
    font-size: 18px;
    color: #333;
    font-weight: bold;
`;

export const FeatureDescription = styled.p`
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
`;

export const GetStartedButton = styled.button`
    background: linear-gradient(90deg, #4A00E0, #8E2DE2);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
        background: linear-gradient(90deg, #8E2DE2, #4A00E0);
    }
`;

export const PricingOverviewWrapper = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
    text-transform: capitalize;
    
    .container{
        gap: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.4s ease;
        border-radius: 10px;
        padding: 10px;
        &:hover{
            /* border: 0.5px solid rgba(0,0,0,0.1); */
            box-shadow: 2px 5px 30px rgba(0,0,0,0.3);
        }

        h2{
            font-weight: 700;

        }
        span{
            font-size: small;
            color: gray;
        }
        .bar{
            width: 80%;
            height: 1.5px;
            background-color: darkgray;
        }
    }
`