import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import chatReducer from "./slices/chatSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    auth: authReducer,
  },
});

export default store;
