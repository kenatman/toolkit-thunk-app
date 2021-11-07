import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk(
  `photos/getPhotos`,
  async (data, thunkAPI) => {
    console.log(data);
    const response = await fetch(
      `https://picsum.photos/v2/list?page=3&limit=9`
    );
    const formattedResponse = await response.json();
    return formattedResponse;
    // 성공시. action.payload 안에 리턴값이 들어간다.
    // 실패시, action.error 안에 에러값이 들어간다.
    // 동기에러는 문법이 틀린거 아니면 생기지 않는다.
  }
);
