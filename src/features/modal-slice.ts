import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Modal = "open" | "close";

const modalSlice = createSlice({
  name: "@@modal",
  initialState: "close" as Modal,
  reducers: {
    openModal: (state, action: PayloadAction<Modal>) => {
      return action.payload;
    },
    closeModal: (state, action: PayloadAction<Modal>) => {
      return action.payload;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
