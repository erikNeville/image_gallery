import * as React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Styled = {
  Box: styled(Box)({
    paddingTop: "1em",
    alignItems: "center",
    justifyContent: "center",
    // maxWidth: "92vw",
    maxWidth: "100%",
    width: "100%",
    margin: "0 auto",
  }),
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return <Styled.Box>{children}</Styled.Box>;
};

export default RootLayout;
