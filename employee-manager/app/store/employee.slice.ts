import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import useApi from "../helpers/apit";
import { EmployeeListDataResponse } from "../types/employee";

interface Employee {
  id: string;
  first_name: string;
  last_name: string;
  number: string;
  email: string;
  gender: "M" | "F";
  photo: string;
}

const initialState: { employeeList: Employee[] } = {
  employeeList: [],
};

const employeeListSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployeeList(state, action) {
      state.employeeList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getEmployeeListAsync.fulfilled,
      (state, action: PayloadAction<EmployeeListDataResponse>) => {
        if (action.payload.isSuccess) {
          state.employeeList = action.payload.employees;
        } else {
          state.employeeList = [];
        }
      }
    );
  },
});

export const getEmployeeListAsync = createAsyncThunk(
  "employee/getEmployeeListAsync",
  async () => {
    const response = await useApi().fetch<EmployeeListDataResponse>(
      "employee/list",
      "GET"
    );
    return response;
  }
);

export const { setEmployeeList } = employeeListSlice.actions;
export default employeeListSlice.reducer;
