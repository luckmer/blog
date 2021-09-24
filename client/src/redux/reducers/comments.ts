import { createSlice } from "@reduxjs/toolkit";

interface InitialInterface {
  comments: {
    [key: string]: string;
  }[];
  commentError: string;
  commentDeleteError: string;
}

const initialState: InitialInterface = {
  comments: [],
  commentError: "",
  commentDeleteError: "",
};

const CommentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    DisplayComments: (state, action) => {
      const posts = action.payload;

      if (posts) state.comments = posts;
    },

    CreateComments: (state, action) => {
      const post = action.payload;
      if (post) {
        state.comments.push(post);
      }
    },

    DeleteComments: (state, action) => {
      const id = action.payload;
      const index = state.comments.filter((el) => el.id !== id);
      state.comments = index;
    },

    DeleteComment: (state, action) => {
      const id = action.payload;
      const index = state.comments.filter((el) => el._id !== id);
      state.comments = index;
    },
    UpdatePost: (state, action) => {
      const response = action.payload;
      if (!response) return;

      const find = state.comments.map((el) => {
        if (el._id === response.id) {
          return { ...el, post: response.post };
        }
        return el;
      });

      state.comments = find;
    },

    DeleteError: (state, action) => {
      const err = action.payload;
      if (err) {
        state.commentDeleteError = "unable to delete comments";
      }
    },

    UpdateComments: (state, action) => {},
  },
});

export const {
  DisplayComments,
  CreateComments,
  DeleteComments,
  UpdateComments,
  DeleteError,
  DeleteComment,
  UpdatePost,
} = CommentsSlice.actions;

export default CommentsSlice.reducer;
