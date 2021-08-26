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

export const fetchByUserId = (id: string) => {
  return fetch(`/user/users/${id}`)
    .then((res) => res.json())
    .then((json) => json);
};

export const fetchUserUpdate = (request: Params) => {
  const data = request;
  const dataId = data.data.id;
  const parameters = globalPutParameter(data);

  return fetch(`/user/change/${dataId}`, parameters)
    .then((response) => response.json())
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

const globalPutParameter = (data: Params) => {
  return {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data.data.data),
  };
};
