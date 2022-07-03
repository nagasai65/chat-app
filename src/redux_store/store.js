import { BUDDIES, CHAT, USER } from "./storeConstants";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { chatReducer } from "./reducers/chatReducer";
import { userReducer } from "./reducers/userReducer";
import { buddiesReducer } from "./reducers/buddiesReducer";

const rootReducer = combineReducers({
  [CHAT]: chatReducer,
  [USER]: userReducer,
  [BUDDIES]: buddiesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
