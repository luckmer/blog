import { Params } from "./../types/Params";
import {
  globalPostParameter,
  globalDeleteParameter,
  globalPutParameter,
} from "./constants";

export const fetchPostComment = async (data: Params) => {
  const parameters = globalPostParameter(data);

  const response = await fetch("/user/createUserComment", parameters);
  const json = await response.json();

  return json;
};

export const getComments = async () => {
  const response = await fetch("/user/comments");
  const json = await response.json();

  return json;
};

export const fetchDeleteComment = async (id: string) => {
  const deleteMethod = globalDeleteParameter();

  const response = await fetch(`/user/deleteUserComment/${id}`, deleteMethod);
  const json = await response.json();

  return json;
};

export const fetchDeleteUniqueComment = async (id: string) => {
  const deleteMethod = globalDeleteParameter();

  const response = await fetch(`/user/deleteUniqueComment/${id}`, deleteMethod);
  const json = await response.json();

  return json;
};

interface Props {
  replyData: {
    [key: string]: string;
  };
}

export const fetchUpdateUniqueComment = async ({
  id,
  post,
}: {
  id: string;
  post: string;
}) => {
  const data = { id, post };
  const updateMethod = globalPutParameter(data);

  const response = await fetch(`/user/updateUserComment/${id}`, updateMethod);
  const json = response.json();

  return json;
};

export const fetchReplyUniqueComment = async ({ replyData }: Props) => {
  const updateMethod = globalPostParameter(replyData as any);

  const response = await fetch(`/user/replyUserComment`, updateMethod);

  const json = response.json();

  return json;
};
