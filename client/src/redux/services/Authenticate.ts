import { Params } from "../types/Params";
import { globalPostParameter, globalPutParameter } from "./constants";

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
  const user = fetch("/user/user");
  if (user) {
    return user.then((res) => res.json()).then((json) => json);
  }
};

export const fetchByUserId = (id: string) => {
  return fetch(`/user/users/${id}`)
    .then((res) => res.json())
    .then((json) => json);
};

export const fetchUserUpdate = (request: Params) => {
  const data = request;
  const dataId = data.data.id;
  const dataResult = data.data.data;

  const parameters = globalPutParameter(dataResult);

  return fetch(`/user/change/${dataId}`, parameters)
    .then((response) => response.json())
    .then((json) => json);
};

export const fetchUserAvatar = (request: any) => {
  const data = request.updateFiles;

  const parameters = globalPutParameter(data);

  return fetch(`/user/avatar`, parameters)
    .then((response) => response.json())
    .then((json) => json);
};

export const logoutAuth = () => {
  return fetch("/user/logout")
    .then((res) => res.json())
    .then((json) => json);
};
