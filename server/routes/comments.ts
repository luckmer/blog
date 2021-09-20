import express from "express";

import {
  getUserComments,
  createUserComment,
  deleteUserComment,
  updateUserComment,
} from "../controllers/comments.controller";

const commentRoutes = express.Router();
commentRoutes.get("/comments", getUserComments);
commentRoutes.post("/createUserComment", createUserComment);
commentRoutes.delete("/deleteUserComment/:id", deleteUserComment);
commentRoutes.patch("/updateUserComment", updateUserComment);

export default commentRoutes;
