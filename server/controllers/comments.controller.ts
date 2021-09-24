import { Request, Response } from "express";
import commentAuth from "../models/userComments";

const removeProperty = (propKey: string, { [propKey]: propValue, ...rest }) => {
  return rest;
};

export const getUserComments = (req: Request, res: Response) => {
  try {
    if (!commentAuth) {
      return res
        .status(303)
        .json({ status: false, result: "couldn't load posts try again later" });
    }

    commentAuth.find(function (err, api) {
      if (err) return console.error(err);
      res.status(201).json({ status: true, result: api });
    });
  } catch (err) {
    return res.status(501).json("process failed");
  }
};

export const createUserComment = (req: Request, res: Response) => {
  try {
    const request = req.body;

    const deleteID = removeProperty("_id", request);

    commentAuth
      .create({ ...deleteID })
      .then(() => {
        res.json({ status: true, result: request });
      })
      .catch(() => {
        return res.status(303).json({
          status: false,
          result: "couldn't create post try again later",
        });
      });
  } catch (err) {
    return res.status(501).json("process failed");
  }
};

export const replyUserComment = (req: Request, res: Response) => {};

export const deleteUserComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await commentAuth.deleteMany({ id });

    return res.status(201).json({ status: true, result: id });
  } catch (err) {
    return res.status(501).json("process failed");
  }
};

export const updateUserComment = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log("comment update", id);
  } catch (err) {
    return res.status(501).json("process failed");
  }
};

export const deleteUniqueComment = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) return;
  } catch (err) {
    return res.status(501).json("process failed");
  }
};
