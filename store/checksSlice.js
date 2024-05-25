"use client";
import { createSlice } from "@reduxjs/toolkit";

const checksSlice = createSlice({
  name: "checks",
  initialState: {
    dateIsEdited: {
      departureIsEdited: false,
      returnIsEdited: false,
    },
    whichIsVisible: "",
    citiesAreLoading: true,
  },
  reducers: {
    CHANGE_DATE_IS_EDITED(state, action) {
      if (action.payload === "departure") {
        state.dateIsEdited.departureIsEdited = true;
      } else if (action.payload === "return") {
        state.dateIsEdited.returnIsEdited = true;
      }
    },
    CHANGE_WHICH_IS_VISIBLE(state, action) {
      state.whichIsVisible = action.payload;
    },
    CHANGE_CITIES_ARE_LOADING(state) {
      state.citiesAreLoading = false;
    },
  },
});

export const checksActions = checksSlice.actions;
export default checksSlice.reducer;
