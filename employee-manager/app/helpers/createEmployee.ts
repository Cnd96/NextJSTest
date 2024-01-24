import useApi from "./apit";
import { EmployeePayload } from "../types/employee";
import { MALE } from "./constants";

const createEmployee = async (employee: EmployeePayload):Promise<any> => {
  try {
    const api = useApi();
    const randNum = Math.floor(Math.random() * 81) + 10;
    const employeeToCreate = {
      first_name: employee.first_name,
      last_name: employee.last_name,
      phone: employee.phone,
      email: employee.email,
      gender: employee.gender === MALE ? "M" : "F",
      photo: `https://randomuser.me/api/portraits/men/${randNum}.jpg`,
    };
    const response = await api.fetch(
      `employee`,
      "POST",
      employeeToCreate
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
export default createEmployee;
