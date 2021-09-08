import { userData } from "./../services/Authenticate";
import { registerAuth, loginAuth, logoutAuth } from "../services/Authenticate";
import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import { Params } from "../types/Params";
import {
  registrationStatus,
  loginStatus,
  onlineUser,
} from "../reducers/registerReducer";
import { delay } from "../constants/delay";
import { ResponseGenerator } from "../types/ResponseGenerator";

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
      loginStatus({
        result: response.result,
        status: response.status,
        Data: response.UserData,
      })
    );
  } catch (err) {
    yield put(loginStatus({ result: err, status: false }));
  }
}

function* logoutSaga() {
  try {
    const response: ResponseGenerator = yield call(logoutAuth);

    yield put(loginStatus({ result: "", status: response.status }));
  } catch (err) {
    yield put(loginStatus({ result: err, status: false }));
  }
}

function* userOnline() {
  try {
    const response: ResponseGenerator = yield call(userData);
    if (response) {
      yield put(
        onlineUser({ result: response.result, status: response.status })
      );
    }
  } catch (err) {
    yield put(onlineUser({ result: err, status: false }));
  }
}

function* SagaAuth() {
  yield takeLatest(sagaActions.REGISTER_USER, registerSaga);
  yield takeLatest(sagaActions.LOGIN_USER, loginSaga);
  yield takeLatest(sagaActions.LOGOUT_USER, logoutSaga);
  yield takeEvery(sagaActions.USER_ONLINE, userOnline);
}

export default SagaAuth;
