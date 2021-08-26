import mongoose from "mongoose";

interface blogInterface {
  useR: string;
  title: string;
  content: string;
  link: string;
}

const PostSchema = new mongoose.Schema({
  user: {
    type: String,
    ref: "user",
  },
  title: {
    type: String,
    require: true,
    trim: true,
    maxLength: 50,
    minLength: 10,
  },
  content: {
    type: String,
    require: true,
    minLength: 10,
  },
  link: {
    type: String,
  },
  category: {
    require: true,
    Type: String,
  },
  timestamps: true,
});

const post = mongoose.model<blogInterface>("blog", PostSchema);

export default post;
