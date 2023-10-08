import { RootState } from "store";

export const linkSelector = (state: RootState) => state.link.list;
