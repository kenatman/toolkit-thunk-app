import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./Slices";
import logger from "redux-logger";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== `production`,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
