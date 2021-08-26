import mongoose from "mongoose";

interface uAuth {
  name: string;
  email: string;
  password: string;
  role: string;
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add your name"],
    trim: true,
    maxLength: [20, "Your name is up to 20 chars long."],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  avatar: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 0,
  },
});

const userAuth = mongoose.model<uAuth>("auth", userSchema);

export default userAuth;
