import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import { registerAuth, loginAuth, userData } from "../services/Authenticate";
import { sagaActions } from "./sagaActions";
import { Params } from "../types/Params";
import {
  registrationStatus,
  loginStatus,
  onlineUser,
} from "../reducers/registerReducer";

const { REGISTER_USER, LOGIN_USER, USER_ONLINE } = sagaActions;

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

interface ResponseGenerator {
  result: string;
  status: boolean;
}

function* registerSaga(payload: Params) {
  try {
    const request = payload;
    const response: ResponseGenerator = yield call(registerAuth, request);

    delay(1000);

    yield put(
      registrationStatus({ result: response.result, status: response.status })
    );
  } catch (err) {
    yield put(registrationStatus({ result: err, status: false }));
  }
}

function* loginSaga(payload: Params) {
  try {
    const response: ResponseGenerator = yield call(loginAuth, payload);

    delay(1000);
    yield put(
      loginStatus({ result: response.result, status: response.status })
    );
  } catch (err) {
    yield put(loginStatus({ result: err, status: false }));
  }
}

function* userOnline() {
  try {
    const response: ResponseGenerator = yield call(userData);
    delay(1000);
    yield put(onlineUser({ result: response.result, status: response.status }));
  } catch (err) {
    yield put(onlineUser({ result: err, status: false }));
  }
}

function* SagaAuth() {
  yield takeLatest(REGISTER_USER, registerSaga);
  yield takeLatest(LOGIN_USER, loginSaga);
  yield takeEvery(USER_ONLINE, userOnline);
}

export default SagaAuth;
