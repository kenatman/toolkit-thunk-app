import { combineReducers } from "redux";
import gallerySlice from "./gallerySlice";
import counterSlice from "./counterSlice";

const rootReducer = combineReducers({
  gallery: gallerySlice.reducer,
  counter: counterSlice.reducer,
});

export default rootReducer;
