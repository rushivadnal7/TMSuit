import React from 'react'
import styled from 'styled-components'

const RecentBlog = ({ blogs }) => {
    return (
        <>
            <Wrapper>
                <h1>Recent Blog</h1>
                {
                    blogs.map((blog) => {
                        return (
                            <>
                                <div key={blog.id} className="recent-blog-card">
                                    <img src={blog.image} alt="" />
                                    <div className="details-container">
                                        <span className="title">{blog.title}</span>
                                        <span className="date">{blog.date}</span>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </Wrapper>
        </>
    )
}

export default RecentBlog


const Wrapper = styled.div`
    width: 80%;
    padding: 4rem 20px;
    border: 0.5px solid rgba(0,0,0,0.2);
    display: flex;
    height: max-content;
    flex-direction: column;
    justify-content: start;
    border-radius: 15px;
    align-items: start;
    transition: all 0.4s ease;
    grid-area: recent;


    &:hover{
        box-shadow: 2px 5px 30px rgba(0,0,0,0.1);
    }


    .recent-blog-card{
        width: 100%;
        height: max-content;
        display: flex;
        justify-content: start;
        align-items: start;
        padding: 10px 0;

        cursor: pointer;

        &:hover{
            color: #03258f;
        }

        img{
            width: 30%;
            height: auto;
            margin: 10px;
        }
        .details-container{
            margin: 10px;
            display: flex;
            flex-direction: column;

            .title {
                width: 100%;
                font-weight: 600;
                font-size:1rem;

            }
            .date{
                font-size: smaller;
            }
        }
    }
`