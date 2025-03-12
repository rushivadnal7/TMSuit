import React from 'react'
import { BlogCardWrapper } from '../../wrappers/sectionWrappers/blog';

const BlogCard = ({ blog , BlogClickHandler }) => {
    return (
        <BlogCardWrapper onClick={() => BlogClickHandler(blog.title , blog.id)}>
            <div className="image-container">
                <img src={blog.image} alt={blog.title} />
            </div>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <span>{blog.date}</span>
        </BlogCardWrapper>
    );
};

export default BlogCard