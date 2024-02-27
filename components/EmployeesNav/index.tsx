import { fetchEmployees } from "@/helpers/employees";
import EmployeesNavCard from "../EmployeesNavCard";
import BackToHomeButton from "../BackToHomeButton";
import { getClient } from "../../lib/client";
import { GET_EMPLOYEES_QUERY } from "@/constants";
import { IEmployees } from "@/helpers/employees/interface";
export const revalidate = 5;

const EmployeesNav = async () => {
  const { data } = await getClient().query({ query: GET_EMPLOYEES_QUERY });
  const employees: IEmployees = data.allEmployees;

  return (
    <nav className="employeesNav">
      <BackToHomeButton />
      {employees.map((employee) => (
        <EmployeesNavCard key={employee.id} {...employee} />
      ))}
    </nav>
  );
};

export default EmployeesNav;
