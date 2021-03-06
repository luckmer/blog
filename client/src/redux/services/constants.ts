import { Params, DataS } from "../types/Params";

export const globalPostParameter = (data: Params) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(!data.data ? data : data.data),
  };
};

export const globalPutParameter = (data: DataS | File) => {
  return {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
};

export const globalDeleteParameter = () => {
  return {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
};
