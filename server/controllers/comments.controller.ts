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

export const createUserComment = async (req: Request, res: Response) => {
  try {
    const request = req.body;

    const deleteID = removeProperty("_id", request);

    const newComment = await commentAuth.create({ ...deleteID });

    if (!newComment) {
      return res
        .status(301)
        .json({ status: false, result: "couldn't create comment" });
    }

    return res.status(201).json({ status: true, result: newComment });
  } catch (err) {
    return res.status(501).json("process failed");
  }
};

export const replyUserComment = async (req: Request, res: Response) => {
  try {
    const response = req.body;

    if (!response) return;

    const result = await commentAuth.create({
      email: response.user,
      reply: response.post,
      replyEmail: response.user,
      id: response.id,
      avatar: response.avatar,
      replyBy: response.replyBy,
      replyData: response.replyData,
      replyUserEmail: response.replyEmail,
    });

    if (!result) {
      return res.status(301).json({ status: false, result: "couldn't  reply" });
    }

    return res.status(201).json({ status: true, result: response });
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
