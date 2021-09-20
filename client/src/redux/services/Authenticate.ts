import { Params } from "../types/Params";
import { globalPostParameter, globalPutParameter } from "./constants";

export const registerAuth = async (request: Params) => {
  const data = request;
  const parameters = globalPostParameter(data);

  const response = await fetch("/user/register", parameters);
  const json = await response.json();

  return json;
};

export const loginAuth = async (request: Params) => {
  const data = request;
  const parameters = globalPostParameter(data);

  const response = await fetch("/user/login", parameters);
  const json = await response.json();

  return json;
};

export const userData = async () => {
  const user = fetch("/user/user");
  if (user) {
    const response = await user;
    const json = await response.json();

    return json;
  }
};

export const fetchByUserId = async (id: string) => {
  const response = await fetch(`/user/users/${id}`);
  const json = await response.json();

  return json;
};

export const fetchUserUpdate = async (request: Params) => {
  const data = request;
  const dataId = data.data.id;
  const dataResult = data.data.data;

  const parameters = globalPutParameter(dataResult);

  const response = await fetch(`/user/change/${dataId}`, parameters);
  const json = await response.json();

  return json;
};

export const fetchUserAvatar = async (request: any) => {
  const data = request.updateFiles;

  const parameters = globalPutParameter(data);

  const response = await fetch(`/user/avatar`, parameters);
  const json = await response.json();

  return json;
};

export const logoutAuth = async () => {
  const response = await fetch("/user/logout");
  const json = await response.json();

  return json;
};
