import { combineReducers, configureStore } from "@reduxjs/toolkit";
import backendAPI from "~/store/apis/user.api";
import userSlice from "~/store/slices/user";

const roodReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [backendAPI.reducerPath]: backendAPI.reducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: roodReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(backendAPI.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
