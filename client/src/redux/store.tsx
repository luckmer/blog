import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import Index from "./reducers/index";
import createSagaMiddleware from "redux-saga";

const store = configureStore({
  reducer: {
    back: Index,
  },
});

export default store;
