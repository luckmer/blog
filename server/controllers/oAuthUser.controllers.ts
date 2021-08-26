import { Request, Response } from "express";
import userAuth from "../models/userAuth.mongo";
import bcrypt from "bcrypt";

const SALT = 12;

const oAuthUpdateProfile = async (req: Request, res: Response) => {
  try {
    const { password, name, email } = req.body;
    const passwordHash = await bcrypt.hash(password, SALT);

    await userAuth.findOneAndUpdate(
      { _id: req.params.id },
      { name: name, email: email, password: passwordHash }
    );

    return res.json({ status: true, result: "account updated" });
  } catch (err: any) {
    return res.status(500).json({ status: false, result: err.message });
  }
};

const oAuthUpdateAvatar = (req: Request, res: Response) => {
  console.log("request");
};

const oAuthDeleteAccount = (req: Request, res: Response) => {};

export { oAuthDeleteAccount, oAuthUpdateProfile, oAuthUpdateAvatar };
