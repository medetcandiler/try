import { fetchEmployee } from "@/helpers/employee";
import { redirect } from "next/navigation";
import EmployeeInfoCard from "@/components/EmployeeInfoCard";
import { getClient } from "@/lib/client";
import { GET_EMPLOYEE_QUERY } from "@/constants";

const page = async ({ params }: { params: { id: string } }) => {
  const { data } = await getClient().query({
    query: GET_EMPLOYEE_QUERY,
    variables: { id: params.id },
  });
  const employee = data.Employee;

  console.log(" data in dynamic", employee);

  if (employee === null) return redirect("/");

  return (
    <>
      <EmployeeInfoCard employee={employee} />
    </>
  );
};

export default page;
