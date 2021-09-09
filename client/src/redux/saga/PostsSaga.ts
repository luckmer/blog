import { createPostUser } from "./../services/PostApi";
import { takeLatest, put, call } from "redux-saga/effects";
import { delay } from "./../constants/delay";
import { sagaActions } from "./sagaActions";

interface Params {
  type: string;
  ID: string;
  createPost: {
    [key: string]: string;
  };
}

interface ResponseState {
  result: string;
  status: boolean;
  title: string;
  createPost: {
    [key: string]: string;
  };
}

interface Test {
  [key: string]: string;
}

function* createUserPost(payload: Params) {
  try {
    const request: Test = payload.createPost;
    const response: ResponseState = yield call(createPostUser, request);

    delay(1000);
  } catch (err) {}
}

function* SagaPost() {
  yield takeLatest(sagaActions.CREATE_POST, createUserPost);
}

export default SagaPost;
