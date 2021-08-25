import { createSlice } from "@reduxjs/toolkit";

interface InitialInterface {
  userStatus: boolean | null;
  userData: string[];
  registrationStatus: boolean | null;
  registrationResult: string;
  loginStatus: boolean | null;
  loginResult: string;
}

const initialState: InitialInterface = {
  userStatus: null,
  userData: [],
  registrationStatus: null,
  registrationResult: "",
  loginStatus: null,
  loginResult: "",
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
      const { status, result } = action.payload;
      state.loginStatus = status;
      state.loginResult = result;
    },

    onlineUser: (state, action) => {
      const { status, result } = action.payload;
      state.userStatus = status;
      state.userData = result;
    },
  },
});

export const { registrationStatus, loginStatus, onlineUser } =
  RegisterReducer.actions;
export default RegisterReducer.reducer;
