import { createSlice } from "@reduxjs/toolkit";
import { blogs } from "../utils/blogsData";

const initialState = {
    blogs: blogs,
    loading: false,
    error: null,
};

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        getAllBlogs: (state) => {
            return state.blogs
        },
        getSingleBlog: (state, action) => {
            const blog = state.blogs.find((blog) => blog.id === action.payload);
            return { ...state, selectedBlog: blog };
        },
    }
})

export const {getAllBlogs , getSingleBlog} =blogSlice.actions;

export default blogSlice.reducer;