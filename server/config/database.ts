import mongoose from "mongoose";
import { CONNECTION_URL } from "../CONNECTION_URL";

mongoose.connect(
  CONNECTION_URL,
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) throw err;
    console.log("Mongodb connection");
  }
);
