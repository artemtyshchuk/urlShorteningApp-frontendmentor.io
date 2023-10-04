import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { modalReducer } from "features/modal-slice";

const rootReducer = combineReducers({
  modal: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
