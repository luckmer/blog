import { createSlice } from "@reduxjs/toolkit";

interface Props {
  posts: {
    [key: string]: string;
  }[];
  errors: string;
}

const initialState: Props = {
  posts: [],
  errors: "",
};

const PostSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    SetPosts: (state, action) => {
      const data = action.payload;
      state.posts = data;
    },
    PostPosts: (state, action) => {
      const data = action.payload;
      state.posts.push(data);
    },

    SetErrors: (state, action) => {
      const error = action.payload;
      state.errors = error;
    },
    DeletePosts: (state, action) => {
      const id = action.payload;
      const currentPosts = state.posts.filter((el) => el._id !== id);
      state.posts = currentPosts;
    },
  },
});

export const { SetPosts, PostPosts, SetErrors, DeletePosts } =
  PostSlice.actions;

export default PostSlice.reducer;
