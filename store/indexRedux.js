"use client";
import { configureStore } from "@reduxjs/toolkit";
import formInputSlice from "./formInputSlice";
import checksSlice from "./checksSlice";
import flightsSlice from "./flightsSlice";

const store = configureStore({
  reducer: { form: formInputSlice, checks: checksSlice, flights: flightsSlice },
});

export default store;
