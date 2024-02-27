"use client";
import { FC } from "react";
import { IEmployee } from "@/helpers/employee/interface";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { formatDate } from "@/lib/dateFormatter";

const CardSection = styled.section`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-content: center;

  @media (max-width: 700px) {
    height: calc(100vh - 100px);
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: relative;
  background-color: #ffffff;
  color: #212529;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 50px 80px;

  @media (max-width: 650px) {
    padding: 50px 90px;
  }
  @media (max-width: 500px) {
    padding: 15px;
  }
  @media (max-width: 350) {
    padding: 5px;
  }
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  white-space: normal;
  gap: 1rem;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Avatar = styled(Image)`
  border-radius: 15px;

  @media (max-width: 700px) {
    width: 150px;
    height: 100px;
  }
`;

const Label = styled.p`
  font-weight: bold;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }
`;

const LabelContent = styled.span`
  color: #343a40;
`;

const EmailLabel = styled.span`
  transition: color 0.3s ease;

  &:hover {
    color: blue;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 5px;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Votes = styled.span`
  position: absolute;
  width: 45px;
  display: grid;
  place-content: center;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  background: rgba(45, 196, 76, 0.7);
  padding: 10px;
  border-radius: 50%;
  color: #fff;
`;

const EmployeeInfoCard: FC<{ employee: IEmployee }> = ({ employee }) => {
  const { name, email, avatar, birthdate, registeredAt, jobTitle, votes } =
    employee;

  return (
    <CardSection>
      <CardContainer>
        <Avatar src={avatar} width={250} height={150} alt={name} priority />
        <SubContainer>
          <Label>
            İsim: <LabelContent>{name}</LabelContent>
          </Label>
          <Label>
            Ünvan: <LabelContent>{jobTitle}</LabelContent>
          </Label>
          <StyledLink href={`mailto:${email.toLocaleLowerCase()}`}>
            <Label>E-posta:</Label>{" "}
            <EmailLabel>{email.toLocaleLowerCase()}</EmailLabel>
          </StyledLink>
          <Label>
            Doğum Tarihi:{" "}
            <LabelContent>{formatDate(birthdate.toString())}</LabelContent>
          </Label>
          <Label>
            İşe Başlama Tarihi:{" "}
            <LabelContent>{formatDate(registeredAt.toString())}</LabelContent>
          </Label>
        </SubContainer>
        <Votes>{votes}</Votes>
      </CardContainer>
    </CardSection>
  );
};

export default EmployeeInfoCard;
