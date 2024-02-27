import { redirect } from "next/navigation";
import EmployeeInfoCard from "@/components/EmployeeInfoCard";
import { GET_EMPLOYEE_QUERY } from "@/constants";

import { getClient } from "@/lib/client";

export const revalidate = 5;

const Page = async ({ params }: { params: { id: string } }) => {
  const { data } = await getClient().query({
    query: GET_EMPLOYEE_QUERY,
    variables: { id: params.id },
  });

  const employee = data.Employee;

  if (employee === null) redirect("/");

  return (
    <>
      <EmployeeInfoCard employee={employee} />
    </>
  );
};

export default Page;
