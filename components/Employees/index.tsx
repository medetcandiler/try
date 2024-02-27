import EmployeesWrapper from "../EmployeesWrapper";
import { getClient } from "../../lib/client";
import { GET_EMPLOYEES_QUERY } from "@/constants";
import { sorter } from "@/lib/sorter";

export const revalidate = 5;

const Employees = async () => {
  const { data } = await getClient().query({ query: GET_EMPLOYEES_QUERY });
  const employees = data.allEmployees;

  return <EmployeesWrapper employees={employees} />;
};

export default Employees;
