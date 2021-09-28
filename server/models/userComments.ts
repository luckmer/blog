import mongoose from "mongoose";

interface uComm {
  [key: string]: string;
}

const commentSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
    },
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    post: {
      type: String,
    },
    id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const commentAuth = mongoose.model<uComm>("comments", commentSchema);

export default commentAuth;
