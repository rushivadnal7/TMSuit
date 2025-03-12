import styled from "styled-components";

export const SingleBlogWrapper = styled.div`
       width: 100%;
    display: grid;
    grid-template-areas:
    "blog recent"
    "blog follow"
    "blog features";
    grid-template-columns: 70% 30%;
    /* grid-template-rows: 100% 10%; */
    /* gap: 20px;  */

    /* display: flex;
    flex-direction: row;
    position: relative;
    justify-content: center;
    align-items: start;
    gap: 3rem;
    flex-wrap: wrap; */
    padding: 5rem 0;

    .left-container{
        width: 80%;
        padding-left: 4rem;
        grid-area: blog;
        display: flex;
        flex-direction: column;   
    }
`