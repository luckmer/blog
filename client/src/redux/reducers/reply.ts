import { createSlice } from "@reduxjs/toolkit";

interface InitialInterface {
  reply: {
    [key: string]: string;
  }[];
}

const initialState: InitialInterface = {
  reply: [],
};

const ReplySlice = createSlice({
  name: "reply",
  initialState,

  reducers: {
    InitialReply: (state, action) => {
      const data = action.payload;
      if (data) {
        state.reply = data;
      }
    },

    UpdateReply: (state, action) => {
      const response = action.payload.result;

      const updateMap = state.reply.map((el) => {
        if (el._id === response.replyID) {
          return {
            ...el,
            replyPost: response.post,
          };
        }
        return el;
      });

      state.reply = updateMap;
    },

    DeleteReply: (state, action) => {
      const id = action.payload;
      const deleteReplyById = state.reply.filter((el) => el._id !== id);
      state.reply = deleteReplyById;
    },

    DeleteMultipleReplies: (state, action) => {
      const id = action.payload;

      const deleteUniqueReplies = state.reply.filter((el) => el.id !== id);

      state.reply = deleteUniqueReplies;
    },

    PostReply: (state, action) => {
      const post = action.payload;

      if (!post) return;

      state.reply.push(post);
    },
  },
});

export const {
  InitialReply,
  UpdateReply,
  DeleteReply,
  PostReply,
  DeleteMultipleReplies,
} = ReplySlice.actions;

export default ReplySlice.reducer;
