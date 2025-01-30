import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types";

const initialState: IUser[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.push(action.payload);
    },
    removeUser(state, action: PayloadAction<string>) {
      return state.filter((item) => item.name !== action.payload);
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
