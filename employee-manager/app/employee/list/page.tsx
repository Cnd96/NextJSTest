"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@mui/system";
import EmployeeListHeader from "./header";
import EmployeesGrid from "./employeesGrid";
import {
  getEmployeeListAsync,
  setEmployeeList,
} from "@/app/store/employee.slice";
import { EmployeeListDataResponse } from "@/app/types/employee";
import { AppDispatch } from "@/app/store";

export default function EmployeeList() {
  const dispatch = useDispatch<AppDispatch>();
  const fetchData = async () => {
    dispatch(getEmployeeListAsync());
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <EmployeeListHeader />
      <Container maxWidth="md">
        <EmployeesGrid />
      </Container>
    </>
  );
}
