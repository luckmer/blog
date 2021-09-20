import { globalDeleteParameter, globalPostParameter } from "./constants";

export const createPostUser = (request: any) => {
  const data = request;

  const parameters = globalPostParameter(data);

  return fetch("/user/create", parameters)
    .then((response) => response.json())
    .then((json) => json);
};

export const getPostUser = async () => {
  const posts = await fetch("/user/post");

  if (posts) return posts.json();
};

export const fetchDeletePost = (id: string) => {
  const deleteMethod = globalDeleteParameter();

  return fetch(`/user/deletePost/${id}`, deleteMethod)
    .then((response) => response.json())
    .then((json) => json);
};
