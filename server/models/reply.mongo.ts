import mongoose from "mongoose";

interface Reply {
  [key: string]: string;
}

const ReplySchema = new mongoose.Schema(
  {
    replyBy: {
      type: String,
    },
    replyTo: {
      type: String,
    },
    replyPost: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ReplyModel = mongoose.model<Reply>("reply", ReplySchema);

export default ReplyModel;
