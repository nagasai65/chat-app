import { createReducer } from "@reduxjs/toolkit";
import { buddiesInitialData } from "../testData";

export const buddiesReducer = createReducer(
  buddiesInitialData,
  (builder) => {}
);
