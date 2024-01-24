import { useSelector } from "react-redux";
import EmployeeCard from "@/app/components/molecules/employeeCard";
import { RootState } from "@/app/store";

export default function EmployeesList() {
  const employee = useSelector((state: RootState) => state.employee);
  console.log(employee.employeeList);
  return (
    <>
      {/* {employee.employeeList.map((employee) => (
        <EmployeeCard
          key={employee.id}
          name={`${employee.first_name} ${employee.last_name}`}
          email={employee.email}
          phone={employee.number}
          gender={employee.gender}
          imageSrc={employee.photo}
        />
      ))} */}
    </>
  );
}
