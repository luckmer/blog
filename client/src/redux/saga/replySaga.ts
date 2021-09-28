import { delay } from "./../constants/delay";
import { sagaActions } from "./sagaActions";
import { takeEvery, takeLatest, call, put } from "redux-saga/effects";

import {
  ReplyTake,
  ReplyMultipleDelete,
  ReplyPost,
  ReplyUpdate,
  ReplyDelete,
} from "./../services/reply";

import {
  InitialReply,
  UpdateReply,
  DeleteReply,
  PostReply,
  DeleteMultipleReplies,
} from "../reducers/reply";

interface ResponseReply {
  status: boolean;
  result: {
    [key: string]: string;
  };
}

interface Params {
  id: string;
  type: string;
  props: {
    [key: string]: string;
  };
}

function* takeReply() {
  try {
    const response: ResponseReply = yield call(ReplyTake);

    if (response.status) {
      yield put(InitialReply(response.result));
    }

    yield delay(1000);
  } catch (err) {}
}

function* updateReply(request: Params) {
  try {
    const responseJson = request.props;

    const response: ResponseReply = yield call(ReplyUpdate, responseJson);
    yield put(UpdateReply(response));
    yield delay(1000);
  } catch (err) {}
}

function* deleteReply(request: Params) {
  try {
    const responseJson = request.props;
    const response: ResponseReply = yield call(ReplyDelete, responseJson);
    const responseStatus = response.status;

    if (responseStatus) {
      const responseResult = response.result;
      yield put(DeleteReply(responseResult));
    }

    yield delay(1000);
  } catch (err) {}
}

function* deleteMultipleReplies(request: Params) {
  try {
    const responseJson = request.props;

    const response: ResponseReply = yield call(
      ReplyMultipleDelete,
      responseJson
    );
    const responseStatus = response.status;

    if (responseStatus) {
      const responseResult = response.result;
      yield put(DeleteMultipleReplies(responseResult));
    }

    yield delay(1000);
  } catch (err) {}
}

function* postReply(request: Params) {
  try {
    const responseJson = request.props;

    const response: ResponseReply = yield call(ReplyPost, responseJson);

    if (response.status) {
      yield put(PostReply(response.result));
    }

    yield delay(1000);
  } catch (err) {}
}

function* SagaReply() {
  yield takeEvery(sagaActions.TAKE_REPLY, takeReply);
  yield takeLatest(sagaActions.POST_REPLY, postReply);
  yield takeLatest(sagaActions.UPDATE_REPLY, updateReply);
  yield takeLatest(sagaActions.DELETE_REPLY, deleteReply);
  yield takeLatest(sagaActions.DELETE_REPLIES, deleteMultipleReplies);
}

export default SagaReply;
