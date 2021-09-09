import { Request, Response } from "express";
import userAuth from "../models/userAuth.mongo";
import bcrypt from "bcrypt";

const SALT = 12;

const oAuthUpdateProfile = async (req: Request, res: Response) => {
  try {
    const { password, name, email } = req.body;

    if (password) {
      const passwordHash = await bcrypt.hash(password, SALT);
      await userAuth.findOneAndUpdate(
        { _id: req.params.id },
        { password: passwordHash }
      );
    }

    if (name && email) {
      await userAuth.findOneAndUpdate(
        { _id: req.params.id },
        { name: name, email: email }
      );
    }

    return res.json({ status: true, result: "account updated" });
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, result: "email already in use" });
  }
};

const oAuthUpdateAvatar = async (req: Request, res: Response) => {
  try {
    const { ID, url } = req.body;

    await userAuth.findOneAndUpdate({ _id: ID }, { avatar: url });
    return res.status(201).json({
      status: true,
      result: url,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      result: "failed to update avatar",
    });
  }
};

const oAuthDeleteAccount = (req: Request, res: Response) => {};

export { oAuthDeleteAccount, oAuthUpdateProfile, oAuthUpdateAvatar };
