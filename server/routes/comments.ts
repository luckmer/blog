import express from "express";

import {
  getUserComments,
  createUserComment,
  deleteUserComment,
  updateUserComment,
  replyUserComment,
  deleteUniqueComment,
} from "../controllers/comments.controller";

const commentRoutes = express.Router();
commentRoutes.get("/comments", getUserComments);
commentRoutes.post("/createUserComment", createUserComment);
commentRoutes.delete("/deleteUserComment/:id", deleteUserComment);
commentRoutes.delete("/deleteUniqueComment/:id", deleteUniqueComment);
commentRoutes.patch("/updateUserComment/:id", updateUserComment);
commentRoutes.post("/replyUserComment", replyUserComment);

export default commentRoutes;
