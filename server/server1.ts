import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import routes from "./routes/index";
import blogRoutes from "./routes/blogPost";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use("/user", routes);
app.use("/user", blogRoutes);

const CONNECTION_URL = ``;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => app.listen(PORT, () => console.log(`connected `)))
  .catch((err) => console.log(`${err} error`));
