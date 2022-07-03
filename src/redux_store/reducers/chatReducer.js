import { createReducer } from "@reduxjs/toolkit";
import { set } from "lodash";
import {
  sendMessageAction,
  setSelectedBuddyAction,
} from "../actions/chatActions";
import { chatInitialData } from "../testData";

export const chatReducer = createReducer(chatInitialData, (builder) => {
  builder
    .addCase(sendMessageAction, (state, action) => {
      const { buddyId, message } = action.payload;

      state.chat[buddyId].push(message);
    })
    .addCase(setSelectedBuddyAction, (state, action) => {
      const buddyId = action.payload;

      set(state, "selectedBuddy", buddyId);
    });
});
