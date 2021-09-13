import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  page: 1,
  limit: 4,
  maxPage: 4,
  minPage: 0,
};

const PaginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    Next: (state, action) => {
      const next = action.payload;
      state.page = next;
    },

    Prev: (state, action) => {
      const prev = action.payload;
      state.page = prev;
    },

    MaxPage: (state, action) => {
      const prev = action.payload;
      state.maxPage = prev;
    },

    MinPage: (state, action) => {
      const prev = action.payload;
      state.minPage = prev;
    },

    SetNumber: (state, action) => {
      const number = action.payload;
      state.page = number;
    },
  },
});

export const { Next, Prev, SetNumber, MaxPage, MinPage } =
  PaginationSlice.actions;

export default PaginationSlice.reducer;
