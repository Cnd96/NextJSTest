export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  gender: "M" | "F";
  photo: string;
};

export type EmployeePayload = {
  id?: number;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  gender: string;
  photo?: string;
};

export type EmployeeListDataResponse = {
  isSuccess: boolean;
  currentPage: number;
  count: number;
  pagesCount: number;
  employees: Employee[];
};
