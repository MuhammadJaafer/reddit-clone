import { NotFoundC } from "@/src/styles/Community.styled";
import { Button } from "@/src/styles/GlobalStyles";
import Link from "next/link";
import React from "react";

type NotFoundProps = {};

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <NotFoundC>
      <p>Sorry, that community does not exist or has been banned</p>
      <Link href={"/"}>
        <Button>Go Home</Button>
      </Link>
    </NotFoundC>
  );
};
export default NotFound;
