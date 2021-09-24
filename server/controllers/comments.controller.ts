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

export const replyUserComment = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = req.body;
  } catch (err) {
    console.error(err);
    return res
      .status(501)
      .json({ status: false, result: "couldn't reply post" });
  }
};

export const deleteUserComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await commentAuth.deleteMany({ id });

    return res.status(201).json({ status: true, result: id });
  } catch (err) {
    console.error(err);
    return res
      .status(501)
      .json({ status: false, result: "couldn't delete comment" });
  }
};

export const updateUserComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = req.body;
    if (!id) return;

    const post = response.post;
    const updateResponse = { post };

    await commentAuth.findOneAndUpdate({ _id: id }, updateResponse);

    return res.status(201).json({ status: true, result: response });
  } catch (err) {
    console.error(err);
    return res
      .status(501)
      .json({ status: false, result: "couldn't update comment" });
  }
};

export const deleteUniqueComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await commentAuth.findByIdAndDelete({ _id: id });

    return res.status(201).json({ status: true, result: id });
  } catch (err) {
    console.error(err);
    return res
      .status(501)
      .json({ status: false, result: "couldn't delete unique comment " });
  }
};
