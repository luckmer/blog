import { sagaActions } from "./sagaActions";
import { takeLatest, put, call } from "redux-saga/effects";
import { delay } from "./../constants/delay";

interface Params {
  type: string;
  ID: string;
  createPost: {
    [key: string]: string;
  };
}

function* createUserPost(payload: Params) {
  try {
    console.log(payload.createPost);
  } catch (err) {}
}

function* SagaPost() {
  yield takeLatest(sagaActions.CREATE_POST, createUserPost);
}

export default SagaPost;
