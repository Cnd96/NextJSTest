import { configureStore } from "@reduxjs/toolkit";
import employeeListReducer from "./employee.slice";

export const store = configureStore({
  reducer: {
    employee: employeeListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
