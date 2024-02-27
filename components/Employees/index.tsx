import EmployeesWrapper from "../EmployeesWrapper";
import { getClient } from "../../lib/client";
import { GET_EMPLOYEES_QUERY } from "@/constants";

export const revalidate = 5;

const Employees = async () => {
  const { data } = await getClient().query({ query: GET_EMPLOYEES_QUERY });
  const employees = data.allEmployees;
  console.log(employees[0])

  return <EmployeesWrapper employees={employees!} />;
};

export default Employees;
