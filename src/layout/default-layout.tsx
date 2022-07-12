import React from "react";
import styled from "styled-components";

export const DefaultLayout = ({
  header = undefined,
  children,
}: {
  header?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <>
      <header>{header}</header>
      <Main>{children}</Main>
    </>
  )
}

const Main = styled.main`
  
`;

const StopButton = styled.button`
  width: 179px;
  height: 95px;
`

