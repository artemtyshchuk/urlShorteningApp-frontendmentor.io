import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Extra, Link, Status } from "types";

export const createLink = createAsyncThunk<
  { data: Link },
  string,
  { extra: Extra }
>("@@link/create-link", (originalLink, { extra: { client, api } }) => {
  return client.get(api.referenceShorteningRequest(originalLink));
});

type LinkSlice = {
  list: Link | null;
  status: Status;
  error: string | null;
};

const initialState: LinkSlice = {
  list: null,
  status: "idle",
  error: null,
};

export const linkSlice = createSlice({
  name: "@@link",
  initialState,
  reducers: {
    removeLink: (state, action: PayloadAction<string>) => {
      if (state.list) {
        return initialState;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createLink.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createLink.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data;
      })
      .addCase(createLink.rejected, (state, action) => {
        state.status = "rejected";
        state.error = "Error!";
      });
  },
});

export const { removeLink } = linkSlice.actions;
export const linkReducer = linkSlice.reducer;
