import { all } from "redux-saga/effects";
import SagaAuth from "./SagaAuth";

export default function* Index() {
  yield all([SagaAuth()]);
}
