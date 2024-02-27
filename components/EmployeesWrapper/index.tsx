"use client";
import { IEmployees } from "@/helpers/employees/interface";
import EmployeeCard from "../EmployeeCard";
import styled from "styled-components";
import { FC } from "react";

const SectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 3rem;
  padding: 0 100px 50px;
  background-color: #f4f4f4;

  @media (max-width: 600px) {
    padding: 0 30px 50px;
  }
`;

const EmployeesWrapper: FC<{ employees: IEmployees }> = ({ employees }) => {
  return (
    <SectionContainer>
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} {...employee} />
      ))}
    </SectionContainer>
  );
};

export default EmployeesWrapper;
