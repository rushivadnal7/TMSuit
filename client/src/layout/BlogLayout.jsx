import React from 'react'
import styled from 'styled-components'
import HeaderSection from '../components/HeaderSection'
import { useLocation } from 'react-router-dom';
import BlogSupport from '../components/blogComponents/BlogSupport';

const BlogLayout = ({ children }) => {
    const location = useLocation();

    const parts = location.pathname.split("/").filter(Boolean); // Removes empty strings

    return (
        <BlogLayoutWrapper>
            <HeaderSection titles={parts} />
            {children}
            <BlogSupport />
        </BlogLayoutWrapper>
    )
}

export default BlogLayout

const BlogLayoutWrapper = styled.div`
    
`