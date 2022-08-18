import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Box, Paper, Stack } from "@mui/material";

const StyledBox = styled(Stack)(({ theme }) => ({
//   alignItems: "stretch",
//   width: "100%",
  "& .MuiPaper-root": {
    margin: 10,
    fontSize: "30px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "200px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "300px",
      height: "200px",
    },
  },
  "& :nth-child(1)": {
    background: "#444",
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
  "& :nth-child(2)": {
    background: "#8e8",
    [theme.breakpoints.down("sm")]: {
      order: 0,
    },
    [theme.breakpoints.up("sm")]: {
      flexGrow: '1',
    },
  },
  "& :nth-child(3)": {
    background: "#a38",
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
}));
export default function ColumnLayout() {
  return (
    <StyledBox
      direction={{ xs: "column", sm: "row" }}
      //   spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Paper elevation={3}>Item 1</Paper>
      <Paper elevation={3}>Item 2</Paper>
      <Paper elevation={3}>Item 3</Paper>
    </StyledBox>
  );
}
