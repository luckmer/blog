import express from "express";
import {
  oAuthRegister,
  oAuthLogin,
  oAuthChangePassword,
  oAuthDeleteAccount,
} from "../controllers/oAuth.controllers";

const router = express.Router();

router.post("/register", oAuthRegister);
router.post("/login", oAuthLogin);
router.put("/change", oAuthChangePassword);
router.delete("/delete", oAuthDeleteAccount);

export default router;
