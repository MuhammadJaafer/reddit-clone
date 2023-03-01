import { PageLayout, Lhs, Rhs } from "@/src/styles/Layout.styled";
import React from "react";

type PageContentProps = { children: React.ReactNode[] };

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <>
      <PageLayout>
        <Lhs>{children[0]}</Lhs>
        <Rhs>{children[1]}</Rhs>
      </PageLayout>
    </>
  );
};
export default PageContent;
