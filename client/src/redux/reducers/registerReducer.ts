import { createSlice } from "@reduxjs/toolkit";

interface InitialInterface {
  userStatus: boolean | null;
  userData: string[];
  registrationStatus: boolean | null;
  registrationResult: string;
  loginStatus: boolean | null;
  loginResult: string;
  PasswordStatus: boolean;
  PasswordResult: string;
  avatar: string;
}

const initialState: InitialInterface = {
  userStatus: null,
  userData: [],
  registrationStatus: null,
  registrationResult: "",
  loginStatus: null,
  loginResult: "",
  PasswordStatus: false,
  PasswordResult: "",
  avatar: "",
};

const RegisterReducer = createSlice({
  name: "registration",
  initialState,

  reducers: {
    registrationStatus: (state, action) => {
      const { status, result } = action.payload;
      state.registrationStatus = status;
      state.registrationResult = result;
    },

    loginStatus: (state, action) => {
      const { status, result, Data } = action.payload;
      state.loginStatus = status;
      state.loginResult = result;

      state.userData = Data;
      state.avatar = Data.avatar;
    },

    setAvatarView: (state, action) => {
      const { avatar } = action.payload;
      state.avatar = avatar;
    },

    UpdateStatus: (state, action) => {
      const { status, result } = action.payload;
      state.PasswordStatus = status;
      state.PasswordResult = result;
    },

    onlineUser: (state, action) => {
      const { status, result } = action.payload;

      state.userStatus = status;
      if (result) {
        state.avatar = result.avatar;
        state.userData = result;
      }
    },
  },
});

export const {
  registrationStatus,
  loginStatus,
  onlineUser,
  UpdateStatus,
  setAvatarView,
} = RegisterReducer.actions;

export default RegisterReducer.reducer;
