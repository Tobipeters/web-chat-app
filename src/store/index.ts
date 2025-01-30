import { combineReducers, configureStore, Middleware } from "@reduxjs/toolkit";
import { messagesReducer } from "./message-slice";
import { usersReducer } from "./user-slice";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import { persistReducer } from "redux-persist";
import { excludedActions, persistConfig } from "../const";

const rootReducer = combineReducers({
  users: usersReducer,
  messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const stateSyncMiddleware = createStateSyncMiddleware({
  blacklist: excludedActions,
}) as Middleware;

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(stateSyncMiddleware),
});

initMessageListener(store);

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;
