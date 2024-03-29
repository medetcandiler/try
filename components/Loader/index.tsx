"use client";
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid #2dc44c;
  border-right: 2px solid #2dc44c;
  border-bottom: 2px solid #2dc44c;
  border-left: 4px solid #1f9d33;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export default Loader;
