import { Request, Response } from "express";
import post from "../models/userPost.mongo";

export const createPost = async (req: Request, res: Response) => {
  try {
    const request = req.body;

    post
      .create({
        image: request.image,
        header: request.header,
        description: request.description,
        category: request.category,
        day: request.day,
        user: request.user,
        id: request.id,
      })
      .then(() => {
        res.json({
          status: true,
          result: request,
        });
      })
      .catch(() =>
        res.status(401).json({
          status: false,
          result: "couldn't create post try again later ",
        })
      );
  } catch (err) {
    return res.status(500).json({
      status: false,
      result: "failed to create post",
    });
  }
};

export const getPost = async (req: Request, res: Response) => {
  if (!post)
    return res.status(500).json({
      status: false,
      result: "couldn't load posts",
    });

  post.find(function (err, apis) {
    if (err) return console.error(err);
    res.status(201).json({ status: true, result: apis });
  });
};

export const DeletePost = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) return;

  await post.findByIdAndDelete(id);

  return res.status(201).json({ status: true, result: id });
};
export const updatePost = () => {};
