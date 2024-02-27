import { IEmployees } from "@/helpers/employees/interface";

export const sorter = (employees: IEmployees) => {
  employees.sort((a, b) => b.votes - a.votes);
  return employees;
};
