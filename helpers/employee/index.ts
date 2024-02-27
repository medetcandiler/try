import { faker } from "@/lib/faker";
import { IEmployee } from "@/helpers/employee/interface";
import { fetcher } from "@/lib/fetcher";
import { GET_EMPLOYEE_QUERY } from "@/constants";

export function createRandomEmployee(): IEmployee {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    jobTitle: faker.person.jobTitle(),
    avatar: faker.image.urlLoremFlickr({ category: "people" }),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    votes: faker.number.int({ min: 0, max: 30 }),
  };
}

export const fetchEmployee = async (paramsId: string) => {
  try {
    const res = await fetcher<{ Employee: IEmployee }>(
      JSON.stringify({ query: GET_EMPLOYEE_QUERY, variables: { id: paramsId } })
    );
    return res.Employee;
  } catch (error) {
    console.log(error);
    return null;
  }
};
