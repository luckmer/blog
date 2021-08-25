import express from "express";
import {
  oAuthRegister,
  oAuthLogin,
  oAuthChangePassword,
  oAuthDeleteAccount,
  User,
} from "../controllers/oAuth.controllers";

const router = express.Router();

router.get("/user", User);
router.post("/register", oAuthRegister);
router.post("/login", oAuthLogin);
router.put("/change", oAuthChangePassword);
router.delete("/delete", oAuthDeleteAccount);

export default router;
