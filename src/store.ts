import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { modalReducer } from "features/modal-slice";
import * as api from "config";
import { linkReducer } from "features/link/link-slice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    link: linkReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
