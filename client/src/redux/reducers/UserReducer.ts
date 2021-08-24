import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default UserSlice.reducer;
