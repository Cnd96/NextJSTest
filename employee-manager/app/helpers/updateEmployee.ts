import useApi from "./apit";
import { EmployeePayload } from "../types/employee";
import { MALE } from "./constants";

const updateEmployee = async (employee: EmployeePayload): Promise<any> => {
  try {
    const api = useApi();
    const randNum = Math.floor(Math.random() * 81) + 10;
    const employeeToUpdate = {
      first_name: employee.first_name,
      last_name: employee.last_name,
      phone: employee.phone,
      email: employee.email,
      gender: employee.gender === MALE ? "M" : "F",
      photo:
        employee.photo ||
        `https://randomuser.me/api/portraits/men/${randNum}.jpg`,
    };
    const response = await api.fetch(
      `employee/${employee.id}`,
      "PUT",
      employeeToUpdate
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
export default updateEmployee;
