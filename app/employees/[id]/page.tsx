"use client";
import { redirect } from "next/navigation";
import EmployeeInfoCard from "@/components/EmployeeInfoCard";
import { GET_EMPLOYEE_QUERY } from "@/constants";
import { useSuspenseQuery } from "@apollo/client";
import { IEmployee } from "@/helpers/employee/interface";

const page = ({ params }: { params: { id: string } }) => {
  const { data } = useSuspenseQuery<{ Employee: IEmployee }>(
    GET_EMPLOYEE_QUERY,
    {
      variables: { id: params.id },
    }
  );
  const employee = data.Employee;
  if (employee === null) return redirect("/");

  return (
    <>
      <EmployeeInfoCard employee={employee} />
    </>
  );
};

export default page;
