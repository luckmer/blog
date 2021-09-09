import { Request, Response } from "express";
import post from "../models/userPost.mongo";

export const createPost = async (req: Request, res: Response) => {
  try {
    const request = req.body;

    if (request) {
      await post.create({
        image: request.image,
        header: request.header,
        description: request.description,
        category: request.category,
        day: request.day,
        user: request.user,
        id: request.id,
      });

      return {
        status: true,
        result: "post successfully created",
      };
    }
    return {
      status: false,
      result: "please fill empty fields",
    };
  } catch (err) {
    return res.status(500).json({
      status: false,
      result: "failed to update avatar",
    });
  }
};

export const getPost = () => {};
export const DeletePost = () => {};
export const updatePost = () => {};
