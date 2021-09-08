import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import Index from "./reducers/index";
import createSagaMiddleware from "redux-saga";
import Saga from "./saga/Index";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  sagaMiddleware,
];

const store = configureStore({
  reducer: {
    back: Index,
  },
  middleware,
});

sagaMiddleware.run(Saga);

export default store;
