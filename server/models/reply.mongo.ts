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
    avatar: {
      type: String,
    },
    replyPost: {
      type: String,
    },
    id: {
      type: String,
      default: "",
    },
    replyID: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const ReplyModel = mongoose.model<Reply>("reply", ReplySchema);

export default ReplyModel;
