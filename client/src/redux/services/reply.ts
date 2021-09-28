import {
  globalDeleteParameter,
  globalPostParameter,
  globalPutParameter,
} from "./constants";

interface Props {
  [key: string]: string;
}

export const ReplyTake = async () => {
  const response = await fetch("/user/replies");
  const json = await response.json();

  return json;
};

export const ReplyPost = async (data: Props) => {
  const responseJson = globalPostParameter(data as any);

  const response = await fetch("/user/postReplies", responseJson);
  const json = await response.json();

  return json;
};

export const ReplyUpdate = async (data: Props) => {
  const responseJson = globalPutParameter(data);

  const response = await fetch(
    `/user/updateReplies/${data.replyID}`,
    responseJson
  );

  const json = await response.json();

  return json;
};

export const ReplyMultipleDelete = async (data: Props) => {
  const responseJson = globalDeleteParameter();

  const response = await fetch(
    `/user/deleteMultipleReplies/${data.id}`,
    responseJson
  );

  const json = response.json();

  return json;
};

export const ReplyDelete = async (data: Props) => {
  const responseJson = globalDeleteParameter();
  const response = await fetch(
    `/user/deleteReplies/${data.replyID}`,
    responseJson
  );

  const json = await response.json();

  return json;
};
