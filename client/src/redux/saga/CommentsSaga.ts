import { takeLatest, call, takeEvery, put } from "redux-saga/effects";
import { ResponseGenerator } from "./../types/ResponseGenerator";
import { delay } from "./../constants/delay";
import { sagaActions } from "./sagaActions";
import { Params } from "./../types/Params";

import {
  fetchPostComment,
  getComments,
  fetchDeleteComment,
} from "./../services/comments";

import {
  CreateComments,
  DeleteComments,
  DeleteError,
  DisplayComments,
} from "../reducers/comments";

interface Posts {
  result: {
    [key: string]: string;
  };
}

function* getComment() {
  try {
    const response: Posts = yield call(getComments);
    yield put(DisplayComments(response.result));

    yield delay(1000);
  } catch (err) {}
}

function* postComment(request: Params) {
  try {
    if (request) {
      const response: ResponseGenerator = yield call(fetchPostComment, request);
      const post = response.result;

      yield put(CreateComments(post));
    }

    yield delay(1000);
  } catch (err) {}
}

function* deleteComment(request: Params) {
  try {
    const response: ResponseGenerator = yield call(
      fetchDeleteComment,
      request.ids.id
    );

    yield put(DeleteComments(response.result));
    yield delay(1000);
  } catch (err) {
    yield put(DeleteError(err));
  }
}

function* updateComment(request: Params) {
  try {
    yield delay(1000);
  } catch (err) {}
}

function* SagaComments() {
  yield takeEvery(sagaActions.GET_COMMENTS, getComment);
  yield takeLatest(sagaActions.POST_COMMENT, postComment);
  yield takeLatest(sagaActions.DELETE_COMMENT, deleteComment);
  yield takeLatest(sagaActions.UPDATE_COMMENT, updateComment);
}

export default SagaComments;
