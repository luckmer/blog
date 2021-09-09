import { delay } from "./../constants/delay";
import { setAvatarView, UpdateStatus } from "../reducers/registerReducer";
import { ResponseGenerator } from "../types/ResponseGenerator";
import { put, call, takeLatest } from "redux-saga/effects";
import { UserDataById } from "../reducers/UserReducer";
import { AvatarState, Params } from "../types/Params";
import { sagaActions } from "./sagaActions";
import {
  fetchByUserId,
  fetchUserUpdate,
  fetchUserAvatar,
} from "../services/Authenticate";

function* userByID(payload: Params) {
  try {
    const userId = payload.ID;
    const response: ResponseGenerator = yield call(fetchByUserId, userId);

    delay(1000);
    yield put(UserDataById({ result: response, status: true }));
  } catch (err) {
    yield put(UserDataById({ result: err, status: false }));
  }
}

function* updateUser(payload: Params) {
  try {
    const response: ResponseGenerator = yield call(fetchUserUpdate, payload);

    yield put(UpdateStatus({ status: true, result: response.result }));
  } catch (err) {
    yield put(UpdateStatus({ status: false, result: "update failed" }));
  }
}

function* updateAvatar(payload: AvatarState) {
  try {
    const response: ResponseGenerator = yield call(fetchUserAvatar, payload);

    yield put(setAvatarView({ avatar: response.result }));
  } catch (err) {
    yield put(UpdateStatus({ status: false }));
  }
}

function* SagaUser() {
  yield takeLatest(sagaActions.UPDATE_USER, updateUser);
  yield takeLatest(sagaActions.USER_BY_ID, userByID);
  yield takeLatest(sagaActions.UPDATE_AVATAR, updateAvatar);
}

export default SagaUser;
