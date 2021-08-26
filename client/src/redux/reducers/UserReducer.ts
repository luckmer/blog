import { createSlice } from "@reduxjs/toolkit";

interface byIdState {
  userByIdStatus: string;
}

const initialState: byIdState = {
  userByIdStatus: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    UserDataById: (state, action) => {
      const { result, status } = action.payload;
      if (status) state.userByIdStatus = result.result;
    },
  },
});

export const { UserDataById } = UserSlice.actions;
export default UserSlice.reducer;
