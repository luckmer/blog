import mongoose from "mongoose";

interface blogInterface {
  [key: string]: string;
}

const PostSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
    },
    header: {
      type: String,
      require: true,
      trim: true,
      minLength: 10,
      maxLength: 50,
    },
    description: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
      maxLength: 50,
      minLength: 10,
      trim: true,
    },
    day: {
      type: String,
    },
    user: {
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

const post = mongoose.model<blogInterface>("blog", PostSchema);

export default post;
