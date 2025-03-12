import { configureStore } from "@reduxjs/toolkit";
import blogReducer  from "../features/BlogSlice";

const store = configureStore({
    reducer: {
        blog : blogReducer
    },
})

export default store;

