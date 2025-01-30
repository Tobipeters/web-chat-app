import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "../types";

const initialState: IMessage[] = [];

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<IMessage>) {
      state.push(action.payload);
    },
  },
});

export const { addMessage } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
