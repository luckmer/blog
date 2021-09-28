import express from "express";

const replyRoutes = express.Router();

import {
  getReplies,
  postReplies,
  updateReplies,
  deleteReplies,
  deleteMultipleReplies,
} from "../controllers/replies.controller";

replyRoutes.get("/replies", getReplies);
replyRoutes.post("/postReplies", postReplies);
replyRoutes.patch("/updateReplies/:id", updateReplies);
replyRoutes.delete("/deleteReplies/:id", deleteReplies);
replyRoutes.delete("/deleteMultipleReplies/:id", deleteMultipleReplies);

export default replyRoutes;
