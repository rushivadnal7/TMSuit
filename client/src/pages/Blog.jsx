import React, { useState } from 'react';
import StandardLayout from '../layout/StandardLayout';
import { useSelector } from 'react-redux';
import { BlogWrapper } from '../wrappers/sectionWrappers/blog';
import styled from 'styled-components';
import RecentBlog from '../components/blogComponents/RecentBlog';
import BlogCard from '../components/blogComponents/BlogCard';
import { useNavigate } from 'react-router-dom';
import BlogLayout from '../layout/BlogLayout';
import FollowCard from '../components/blogComponents/FollowCard';


const Blog = () => {
    const allBlogs = useSelector((state) => state.blog.blogs);
    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 5;

    const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

    const startIndex = (currentPage - 1) * blogsPerPage;
    const currentBlogs = allBlogs.slice(startIndex, startIndex + blogsPerPage);


    const BlogClickHandler = (title, id) => {
        const _title = title.trim().replace(/\s+/g, "-").toLowerCase();
        navigate(`/blog/${_title}`, { state: id });
    };

    return (
        <StandardLayout>
            <BlogLayout>
                <BlogWrapper>
                    <div className="blogs">
                        {currentBlogs.map((blog) => (
                            <BlogCard BlogClickHandler={BlogClickHandler} key={blog.id} blog={blog} />
                        ))}
                    </div>
                    <RecentBlog blogs={currentBlogs} />
                    <FollowCard/>
                    <Pagination>
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            Prev
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </button>
                    </Pagination>
                </BlogWrapper>
            </BlogLayout>
        </StandardLayout>
    );
};

export default Blog;


const Pagination = styled.div`
    position: absolute;
    bottom: -0%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;

    button {
        padding: 8px 16px;
        border: none;
        background-color: #03258f;
        color: white;
        cursor: pointer;

        &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
    }
`;
