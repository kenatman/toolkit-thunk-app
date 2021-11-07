import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: `counter`,
  initialState: { count: 0 },
  reducers: {
    //동기처리
    add: (state, action) => {
      state.count++;
    },
    minus: (state, action) => {
      state.count--;
    },
  },
  extraReducers: {
    //비동기처리
  },
});

export default counterSlice;
