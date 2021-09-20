import { Params } from "./../types/Params";
import { globalPostParameter, globalDeleteParameter } from "./constants";

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
