import { Params } from "./../types/Params";
import { globalPostParameter, globalDeleteParameter } from "./constants";

export const fetchPostComment = (data: Params) => {
  const parameters = globalPostParameter(data);

  return fetch("/user/createUserComment", parameters)
    .then((response) => response.json())
    .then((json) => json);
};

export const getComments = () => {
  return fetch("/user/comments")
    .then((response) => response.json())
    .then((json) => json);
};

export const fetchDeleteComment = (id: string) => {
  const deleteMethod = globalDeleteParameter();

  return fetch(`/user/deleteUserComment/${id}`, deleteMethod)
    .then((response) => response.json())
    .then((json) => json);
};
