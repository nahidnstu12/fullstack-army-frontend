import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledWrapper = styled("div")(() => ({
  display: "grid",
  gridTemplateRows: "60px 1fr 60px",
  height: "100vh",
}));

const StyledMain = styled("main")(() => ({
  // overflowY: 'scroll',
  padding: 10,
}));

const StyledFooter = styled("footer")(() => ({
  width: "100%",
  height: "60px",
  position: "fixed",
  bottom: 0,
  left: 0,
  textAlign: "center",
  background: "#e89",
}));

export default function Screenfit() {
  return (
    <StyledWrapper>
      <Header />
      <Content />
      <Footer />
    </StyledWrapper>
  );
}

const Header = () => {
  return (
    <Box sx={{ flexShrink: 0 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
const Content = () => {
  return (
    <StyledMain>
      <Typography>Main Content Section</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veniam
        tenetur repudiandae laudantium commodi quidem deleniti numquam quibusdam
        mollitia libero. At quisquam cupiditate corporis aut, sapiente, nobis ad
        totam optio error repudiandae expedita. Obcaecati vero adipisci deserunt
        quae porro ipsa at facilis id! Culpa aperiam cumque, odit pariatur
        dignissimos laborum iste ipsum saepe ut debitis, deleniti impedit esse
        quo optio minus aliquam sapiente omnis vel quasi nulla doloribus
        placeat! Unde error natus voluptatibus modi, reiciendis voluptatum, quas
        ipsa voluptate cum quibusdam tempora minus porro ea. Voluptatem, iste
        pariatur. Molestias adipisci, quibusdam fugiat facere libero tempore
        magni corrupti earum atque sunt?
      </Typography>
      <Typography>
        lorem1000
      </Typography>
    </StyledMain>
  );
};
const Footer = () => {
  return <StyledFooter>Sticky footer</StyledFooter>;
};
