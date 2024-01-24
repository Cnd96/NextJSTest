import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import useApi from "../helpers/apit";
import { Employee, EmployeeListDataResponse } from "../types/employee";
import { PAGE_SIZE } from "../helpers/constants";

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
    builder.addCase(
      deleteEmployeeAsync.fulfilled,
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
  async (page: number) => {
    const response = await useApi().fetch<EmployeeListDataResponse>(
      `employee/list?pageSize=${PAGE_SIZE}&page=${page}`,
      "GET"
    );
    return response;
  }
);

export const deleteEmployeeAsync = createAsyncThunk(
  "employee/deleteEmployeeAsync",
  async (id: number) => {
    await useApi().fetch(`employee/${id}`, "DELETE");
    const response = await useApi().fetch<EmployeeListDataResponse>(
      `employee/list?pageSize=${PAGE_SIZE}&page=1`,
      "GET"
    );
    return response;
  }
);

export const { setEmployeeList } = employeeListSlice.actions;
export default employeeListSlice.reducer;
