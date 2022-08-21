import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Box, Button, Card, CardActions, CardContent, Grid, Paper, Stack, Typography } from "@mui/material";

const StyledGrid = styled(Grid)(({ theme }) => ({
    minHeight: "120px",
    margin: 0,
    color:"white",
  "& :nth-child(1)": {
    background: "#444",
  },
  "& :nth-child(2)": {
    background: "#8e8",
  },
  "& :nth-child(3)": {
    background: "#a38",
  },
  "& :nth-child(4)": {
    background: "#444",
  },
}));
export default function GridLayout() {
  return (
    <StyledGrid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
      Item 1
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        ITEM 2
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        ITEM 3
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        ITEM 4
      </Grid>
    </StyledGrid>
  );
}
