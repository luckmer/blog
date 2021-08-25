import { Request, Response } from "express";
import userAuth from "../models/userAuth.mongo";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwt_decode from "jwt-decode";

const max = 3 * 24 * 60 * 60;
const SALT = 12;
const SECRET = 211534129078435750;

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
      userAuth.findOne({ email }).then((user) => {
        if (user) {
          const id = user._id;
          const token = createToken(id);
          bcrypt.compare(password, user.password, (err, results) => {
            if (results) {
              res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: max * 1000,
              });

              return res.status(201).json({
                status: true,
                result: "logged in",
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

export const User = async (req: Request, res: Response) => {
  try {
    const cookie = req.cookies.jwt;
    if (cookie) {
      const decode = jwt_decode<JwtId>(cookie);
      if (decode) {
        const decodedID = decode.id;
        const user = await userAuth.findById(decodedID);
        if (user) {
          const { email, name } = user;
          const userResult = { email, name };
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
      result: err,
    });
  }
};

export const Logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("jwt");
    return res.status(201).json({ status: false, result: "logged out " });
  } catch (err) {
    res.status(501).json({ status: false, result: err.message });
  }
};

const oAuthChangePassword = (req: Request, res: Response) => {};

const oAuthDeleteAccount = (req: Request, res: Response) => {};

export { oAuthRegister, oAuthLogin, oAuthChangePassword, oAuthDeleteAccount };

export const validateEmail = (email: string) => {
  const req: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return req.test(email);
};

export const validatePassword = (password: string) => {
  const req: RegExp = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  return req.test(password);
};

const createToken = (id: number) => {
  return jwt.sign({ id }, SECRET.toString(), {
    expiresIn: Math.floor(Date.now() / 1000) + 60 * 60,
  });
};
