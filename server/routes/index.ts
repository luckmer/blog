import express from "express";
import {
  oAuthRegister,
  oAuthLogin,
  Logout,
  getUserByID,
  User,
} from "../controllers/oAuth.controllers";

import {
  oAuthDeleteAccount,
  oAuthUpdateProfile,
  oAuthUpdateAvatar,
} from "../controllers/oAuthUser.controllers";

const router = express.Router();

router.get("/user", User);
router.get("/users/:id", getUserByID);
router.post("/register", oAuthRegister);
router.post("/login", oAuthLogin);
router.get("/logout", Logout);

router.patch("/change/:id", oAuthUpdateProfile);
router.delete("/delete", oAuthDeleteAccount);
router.patch("/avatar", oAuthUpdateAvatar);

export default router;
