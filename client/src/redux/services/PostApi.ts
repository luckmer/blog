import { globalPostParameter } from "./constants";

export const createPostUser = (request: any) => {
  const data = request;

  const parameters = globalPostParameter(data);

  return fetch("/user/create", parameters)
    .then((response) => response.json())
    .then((json) => json);
};
