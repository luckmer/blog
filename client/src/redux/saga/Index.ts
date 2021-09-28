import { all } from "redux-saga/effects";
import SagaAuth from "./SagaAuth";
import SagaUser from "./SagaUser";
import SagaPost from "./PostsSaga";
import SagaComments from "./CommentsSaga";
import SagaReply from "./replySaga";

export default function* Index() {
  yield all([SagaAuth(), SagaUser(), SagaPost(), SagaComments(), SagaReply()]);
}
