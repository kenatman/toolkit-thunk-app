import { createSlice } from "@reduxjs/toolkit";
import { getPhotos } from "../Actions/galleryAction";

export const gallerySlice = createSlice({
  name: `gallery`, // gallerySlice면 이름은 gallery! 규칙성 있게!!
  initialState: { photos: [], isLoading: false, error: null },
  reducers: {
    // 동기적 처리
  },

  //비동기적처리
  extraReducers: {
    [getPhotos.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
    },
    [getPhotos.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export default gallerySlice;
