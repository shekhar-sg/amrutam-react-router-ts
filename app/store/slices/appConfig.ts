import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AppConfig {
  isSideNavOpen: boolean;
}

const initialState: AppConfig = {
  isSideNavOpen: false,
};

const appConfigSlice = createSlice({
  name: "appConfig",
  initialState,
  reducers: {
    toggleSideNav: (state, { payload }: PayloadAction<boolean | undefined>) => {
      state.isSideNavOpen = payload ?? !state.isSideNavOpen;
    },
  },
});
export default appConfigSlice;

export const { toggleSideNav } = appConfigSlice.actions;
