import { Params } from "../types/Params";

export const registerAuth = (request: Params) => {
  const data = request;
  const parameters = globalPostParameter(data);

  return fetch("/user/register", parameters)
    .then((response) => response.json())
    .then((json) => json);
};

export const loginAuth = (request: Params) => {
  const data = request;
  const parameters = globalPostParameter(data);

  return fetch("/user/login", parameters)
    .then((response) => response.json())
    .then((json) => json);
};

export const userData = () => {
  return fetch("/user/user")
    .then((res) => res.json())
    .then((json) => json);
};

const globalPostParameter = (data: Params) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data.data),
  };
};
