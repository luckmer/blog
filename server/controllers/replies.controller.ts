import { Request, Response } from "express";
import ReplyModel from "../models/reply.mongo";

export const getReplies = (req: Request, res: Response) => {
  try {
    if (!ReplyModel) {
      return res.status(303).json({
        status: false,
        result: "couldn't load replies try again later",
      });
    }

    ReplyModel.find((err, api) => {
      if (err) return console.error(err);
      res.status(201).json({
        status: true,
        result: api,
      });
    });
  } catch (err) {
    return MultipleErr(res, "get");
  }
};

export const postReplies = async (req: Request, res: Response) => {
  try {
    const response = req.body;

    const postResult = await ReplyModel.create({ ...response });

    if (!postResult) {
      return res.status(301).json({
        status: false,
        result: "could't create reply, try again later ",
      });
    }

    return res.status(201).json({
      status: true,
      result: postResult,
    });
  } catch (err) {
    return MultipleErr(res, "reply");
  }
};

export const updateReplies = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) return;

    const updateMethod = { replyPost: req.body };

    if (!updateMethod) {
      return res.status(301).json({
        status: false,
        result: "could't create update, try again later ",
      });
    }

    const updateResult = await ReplyModel.findByIdAndUpdate(
      { _id: id },
      updateMethod
    );

    return res.status(201).json({
      status: true,
      result: updateResult,
    });
  } catch (err) {
    return MultipleErr(res, "update");
  }
};

export const deleteReplies = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await ReplyModel.findByIdAndDelete({ _id: id });

    return res.status(201).json({ status: true, result: id });
  } catch (err) {
    return MultipleErr(res, "delete");
  }
};

const MultipleErr = (
  res: Response<any, Record<string, any>>,
  header: string
) => {
  return res.status(501).json({
    status: false,
    result: `couldn't ${header} , try again later`,
  });
};
