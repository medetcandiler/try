import { IEmployees } from "./interface";
import { GET_EMPLOYEES_QUERY } from "@/constants";
import { fetcher } from "@/lib/fetcher";
import { sorter } from "@/lib/sorter";

export const fetchEmployees = async () => {
  try {
    const res = await fetcher<{ allEmployees: IEmployees }>(
      JSON.stringify({
        query: `
      query GetEmployees {
        allEmployees {
          id,
          name,
          jobTitle,
          avatar,
          votes 
        }
      }
    `,
      })
    );
    const { allEmployees } = res;

    return sorter(allEmployees);
  } catch (error) {
    console.log(error);
  }
};
