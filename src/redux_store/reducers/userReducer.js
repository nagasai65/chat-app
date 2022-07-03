import { createReducer } from "@reduxjs/toolkit";
import { userInitialData } from "../testData";

export const userReducer = createReducer(userInitialData, (builder) => {});
