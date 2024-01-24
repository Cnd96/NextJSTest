export type Employee = {
  id: string;
  first_name: string;
  last_name: string;
  number: string;
  email: string;
  gender: "M" | "F";
  photo: string;
};

export type EmployeeListDataResponse = {
  isSuccess: boolean;
  currentPage: number;
  count: number;
  pagesCount: number;
  employees: Employee[];
};
