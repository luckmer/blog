import {
  updatePost,
  createPost,
  DeletePost,
  getPost,
} from "./../controllers/blockPost.controller";
import express from "express";

const blogRoutes = express.Router();

blogRoutes.post("/create", createPost);
blogRoutes.get("/post", getPost);
blogRoutes.put("/updatePost", updatePost);
blogRoutes.delete("/deletePost/:id", DeletePost);

export default blogRoutes;
