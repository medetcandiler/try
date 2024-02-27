import { gql } from "@apollo/client";
export const url = "http://localhost:4005/graphql";
export const GET_EMPLOYEES_QUERY = gql`
  query GetEmployees {
    allEmployees {
      id,
      name,
      jobTitle,
      avatar,
      votes 
    }
  }
`;

export const GET_EMPLOYEE_QUERY = gql`
query GetEmployee($id: ID!) {
  Employee(id: $id) {
    id
    name
    email
    avatar
    birthdate
    registeredAt
    jobTitle
    votes
  }
}
`;

export const UPVOTE_EMPLOYEE_MUTATION = `
mutation UpvoteEmployeeMutation($id: ID!, $votes: Int!) {
  updateEmployee(id: $id, votes: $votes ) {
    id,
    name,
    avatar,
    votes
  }
}
`;
