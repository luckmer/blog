import { globalDeleteParameter, globalPostParameter } from "./constants";

export const createPostUser = async (request: any) => {
  const data = request;

  const parameters = globalPostParameter(data);

  const response = await fetch("/user/create", parameters);
  const json = await response.json();

  return json;
};

export const getPostUser = async () => {
  const response = await fetch("/user/post");
  const json = response.json();

  if (json) return json;
};

export const fetchDeletePost = async (id: string) => {
  const deleteMethod = globalDeleteParameter();

  const response = await fetch(`/user/deletePost/${id}`, deleteMethod);
  const json = await response.json();

  return json;
};
