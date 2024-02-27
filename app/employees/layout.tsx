import { Metadata } from "next";
import { FC, ReactNode } from "react";
import EmployeesNav from "@/components/EmployeesNav";

interface IEmployeesPageProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "ENUYGUN | ÇALIŞANLAR",
};

const EmployeesLayout: FC<IEmployeesPageProps> = ({ children }) => {
  return (
    <section className="employees-layout">
      <EmployeesNav />
      {children}
    </section>
  );
};

export default EmployeesLayout;
