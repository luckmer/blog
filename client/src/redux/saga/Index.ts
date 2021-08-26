import { all } from "redux-saga/effects";
import SagaAuth from "./SagaAuth";
import SagaUser from "./SagaUser";

export default function* Index() {
  yield all([SagaAuth(), SagaUser()]);
}
