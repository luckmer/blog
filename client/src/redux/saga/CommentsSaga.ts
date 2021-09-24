import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { delay } from "./../constants/delay";
import { Params } from "./../types/Params";
import { ResponseGenerator } from "./../types/ResponseGenerator";
import { sagaActions } from "./sagaActions";

import {
  fetchPostComment,
  getComments,
  fetchDeleteComment,
  fetchDeleteUniqueComment,
  fetchUpdateUniqueComment,
  fetchReplyUniqueComment,
} from "./../services/comments";

import {
  CreateComments,
  DeleteComments,
  DeleteError,
  DisplayComments,
} from "../reducers/comments";

interface Posts {
  result: {
    id: string;
    post: string;
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

function* deleteComments(request: Params) {
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

function* deleteComment(request: Params) {
  try {
    if (!request.props) return;
    const id = request.props.id;

    const response: ResponseGenerator = yield call(
      fetchDeleteUniqueComment,
      id
    );

    yield delay(1000);
  } catch (err) {}
}

interface Test {
  id: string;
  post: string;
}

function* updateComment(request: Params) {
  try {
    const updateData = request.props;
    if (!updateData) return;

    const { id, post } = updateData;

    const response: ResponseGenerator = yield call(fetchUpdateUniqueComment, {
      id,
      post,
    });

    yield delay(1000);
  } catch (err) {}
}

function* replyComment(request: Params) {
  try {
    const replyData = request.props;
    const { id, user } = replyData;

    if (!user || !id) return;

    const response: ResponseGenerator = yield call(fetchReplyUniqueComment, {
      id,
      user,
    });

    yield delay(1000);
  } catch (err) {}
}

function* SagaComments() {
  yield takeEvery(sagaActions.GET_COMMENTS, getComment);
  yield takeLatest(sagaActions.POST_COMMENT, postComment);
  yield takeLatest(sagaActions.DELETE_COMMENT, deleteComments);
  yield takeLatest(sagaActions.UPDATE_COMMENT, updateComment);
  yield takeLatest(sagaActions.DELETE_UNIQUE_COMMENT, deleteComment);
  yield takeLatest(sagaActions.REPLY_COMMENT, replyComment);
}

export default SagaComments;
