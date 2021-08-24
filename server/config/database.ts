import mongoose from "mongoose";

const CONNECTION_URL = ``;
mongoose
  .connect(CONNECTION_URL, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("mongo on");
  })
  .catch((err) => console.log(`${err} error`));
