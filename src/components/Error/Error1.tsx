import { ErrorC, NorText } from "@/src/styles/GlobalStyles";
import React from "react";
import { IoIosAlert } from "react-icons/io";

type ErrorProps = {
  error: string;
};

const Error1: React.FC<ErrorProps> = ({ error }) => {
  return (
    <ErrorC>
      <IoIosAlert />
      <NorText>{error}</NorText>
    </ErrorC>
  );
};
export default Error1;
