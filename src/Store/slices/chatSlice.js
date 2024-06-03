import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChat: null,
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setCurrentChat: (state, action) => {
      state.currentChat = action.payload;
    },
    sendMessage: (state, action) => {
      state.messages.push({ ...action.payload, status: "sent" });
    },
    deleteMessage: (state, action) => {
      state.messages = state.messages.filter(
        (msg, index) => index !== action.payload
      );
    },
    editMessage: (state, action) => {
      const { index, text } = action.payload;
      state.messages[index].text = text;
      state.messages[index].status = "edited";
    },
    updateMessageStatus: (state, action) => {
      const { index, status } = action.payload;
      state.messages[index].status = status;
    },
  },
});

export const {
  setCurrentChat,
  sendMessage,
  deleteMessage,
  editMessage,
  updateMessageStatus,
} = chatSlice.actions;

export default chatSlice.reducer;
