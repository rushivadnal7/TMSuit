import React, { useEffect } from 'react'
import StandardLayout from '../layout/StandardLayout';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BlogLayout from '../layout/BlogLayout';
import { getSingleBlog } from '../features/BlogSlice';
import { SingleBlogWrapper } from '../wrappers/sectionWrappers/singleblog';
import parse from 'html-react-parser';
import RecentBlog from '../components/blogComponents/RecentBlog'
import FollowCard from '../components/blogComponents/FollowCard';
import BlogFeatures from '../components/blogComponents/BlogFeatures';


const SingleBlog = () => {
    const location = useLocation()
    const blogid = location.state

    const allBlogs = useSelector((state) => state.blog.blogs);
    const top5Blogs = allBlogs.slice(0, 5);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSingleBlog(blogid));
    }, [dispatch, blogid]);


    const selectedBlog = useSelector((state) => state.blog.selectedBlog);


    return (
        <StandardLayout>
            <BlogLayout>
                <SingleBlogWrapper>
                    {selectedBlog && (
                        <div className="left-container">
                            <img src={selectedBlog.image} alt="" />
                            <p>{parse(selectedBlog.blog)}</p>
                        </div>
                    )}
                    <RecentBlog blogs={top5Blogs} />
                    <FollowCard/>
                    <BlogFeatures/>
                </SingleBlogWrapper>
            </BlogLayout>
        </StandardLayout>
    )
}

export default SingleBlog