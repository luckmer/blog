import { put, call, takeLatest } from "redux-saga/effects";
import { UserDataById } from "../reducers/UserReducer";
import { Params } from "../types/Params";
import { sagaActions } from "./sagaActions";
import { UpdateStatus } from "../reducers/registerReducer";
import { fetchByUserId, fetchUserUpdate } from "../services/Authenticate";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

interface ResponseGenerator {
  result: string;
  status: boolean;
  title: string;
  UserData: {
    email: string;
  };
}

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

//connect
function* updateUser(payload: Params) {
  try {
    const response: ResponseGenerator = yield call(fetchUserUpdate, payload);

    yield put(UpdateStatus({ status: true, result: response.result }));
  } catch (err) {
    yield put(UpdateStatus({ status: false }));
  }
}

function* updateAvatar(payload: Params) {}

function* SagaUser() {
  yield takeLatest(sagaActions.UPDATE_USER, updateUser);
  yield takeLatest(sagaActions.USER_BY_ID, userByID);
  yield takeLatest(sagaActions.UPDATE_AVATAR, updateAvatar);
}

export default SagaUser;
