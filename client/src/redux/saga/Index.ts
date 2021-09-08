import { all } from "redux-saga/effects";
import SagaAuth from "./SagaAuth";
import SagaUser from "./SagaUser";
import SagaPost from "./PostsSaga";

export default function* Index() {
  yield all([SagaAuth(), SagaUser(), SagaPost()]);
}
