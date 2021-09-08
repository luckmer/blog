import dotenv from "dotenv";
dotenv.config();

import blogRoutes from "./routes/blogPost";
import { PORT } from "./CONNECTION_URL";
import cookieParser from "cookie-parser";
import formData from "express-form-data";
import routes from "./routes/index";
import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(formData.parse());
app.use("/user", routes);
app.use("/user", blogRoutes);

import "./config/database";

app.listen(PORT, () => console.log(`connected `));
