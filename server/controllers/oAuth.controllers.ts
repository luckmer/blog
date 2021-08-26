import { Request, Response } from "express";
import userAuth from "../models/userAuth.mongo";
import bcrypt from "bcrypt";
import jwt_decode from "jwt-decode";
import { validateEmail, validatePassword, createToken } from "../constants";

const max = 3 * 24 * 60 * 60;
const SALT = 12;

const oAuthRegister = async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirm } = req.body;
    const emailReq = validateEmail(email);
    const passwordReq = validatePassword(password);

    if (!emailReq || !passwordReq) {
      return res
        .status(401)
        .json({ status: false, result: "please check your password or email" });
    }

    if (password !== confirm) {
      return res
        .status(401)
        .json({ status: false, result: "check password or confirm password" });
    }

    if (!passwordReq) {
      return res.status(401).json({
        status: false,
        result:
          "Password must have minimum 8 characters and contain at least 1 UPPERCASE, 1 lower case, 1 number, 1 special character.",
      });
    }

    if (email && password) {
      await bcrypt.hash(password, SALT, (_, hash) => {
        userAuth.find({ email: email }, (_, docs) => {
          if (docs.length) {
            return res.status(401).json({
              status: false,
              result: "user already exists",
            });
          } else {
            userAuth
              .create({
                name: name,
                email: email,
                password: hash,
                avatar: "",
              })
              .then(() => {
                res.json({
                  status: true,
                  result: "account created",
                });
              })
              .catch((error) =>
                res.status(401).json({ status: false, result: error })
              );
          }
        });
      });
    }
  } catch (error) {
    return res.status(501).json({
      status: false,
      result: error,
    });
  }
};

const oAuthLogin = (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const emailReq = validateEmail(email);
    const passwordReq = validatePassword(password);

    if (!emailReq || !passwordReq) {
      return res
        .status(401)
        .json({ status: false, result: "please check your password or email" });
    }

    if (email && password) {
      userAuth.findOne({ email: email }).then((user) => {
        if (user) {
          const id = user._id;
          const token = createToken(id);

          console.log(password, user.password, user);
          bcrypt.compare(password, user.password, (err, results) => {
            console.log(err);
            if (results) {
              res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: max * 1000,
              });
              const { email, name, _id } = user;
              const userResult = { email, name, _id };

              return res.status(201).json({
                status: true,
                result: "logged in",
                UserData: userResult,
              });
            } else {
              return res.status(401).json({
                status: false,
                result: "check password or confirm password",
              });
            }
          });
        }
      });
    }
  } catch (err) {
    return res.status(501).json({
      status: false,
      result: err,
    });
  }
};

interface JwtId {
  id: number;
}

const User = async (req: Request, res: Response) => {
  try {
    const cookie = req.cookies.jwt;

    if (cookie) {
      console.log("request");
      const decode = jwt_decode<JwtId>(cookie);
      if (decode) {
        const decodedID = decode.id;
        const user = await userAuth.findById(decodedID);
        if (user) {
          const { email, name, _id } = user;
          const userResult = { email, name, _id };
          return res.status(201).json({
            status: true,
            result: userResult,
          });
        }
      }
    }

    if (!cookie) return res.status(401).json({ title: "Please login" });
  } catch (err) {
    return res.status(501).json({
      status: false,
      result: err.message,
    });
  }
};

const getUserByID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await userAuth.findById(id);

    if (user) {
      const { _id, email, name } = user;

      const userResult = { _id, email, name };

      return res.status(201).json({
        status: true,
        result: userResult,
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: false,
      result: err.message,
    });
  }
};

const Logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("jwt");
    return res.status(201).json({ status: false, result: "logged out " });
  } catch (err) {
    res.status(501).json({ status: false, result: err.message });
  }
};

export { oAuthRegister, oAuthLogin, Logout, getUserByID, User };
