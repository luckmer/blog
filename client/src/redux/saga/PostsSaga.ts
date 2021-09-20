import { ResponseGenerator } from "./../types/ResponseGenerator";

import { takeLatest, put, call, takeEvery } from "redux-saga/effects";
import { delay } from "./../constants/delay";
import { sagaActions } from "./sagaActions";
import { SetPosts, PostPosts, SetErrors, DeletePosts } from "../reducers/Posts";

import {
  createPostUser,
  getPostUser,
  fetchDeletePost,
} from "./../services/PostApi";

interface Params {
  ids: {
    [key: string]: string;
  };
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

    if (response.status) {
      yield put(PostPosts(response.result));
    }

    delay(1000);
  } catch (err) {
    yield put(SetErrors(err));
  }
}

function* getBlogPosts() {
  try {
    const response: ResponseState = yield call(getPostUser);
    if (response.status) {
      yield put(SetPosts(response.result));
    }
  } catch (err) {
    yield put(SetErrors(err));
  }
}

function* deletePosts(request: Params) {
  try {
    const id = request.ids.ID;

    const response: ResponseGenerator = yield call(fetchDeletePost, id);
    if (response.status) {
      yield put(DeletePosts(response.result));
    }
    yield delay(1000);
  } catch (err) {}
}

function* SagaPost() {
  yield takeLatest(sagaActions.CREATE_POST, createUserPost);
  yield takeEvery(sagaActions.BLOG_POSTS_DISPLAY, getBlogPosts);
  yield takeLatest(sagaActions.DELETE_POST, deletePosts);
}

export default SagaPost;
