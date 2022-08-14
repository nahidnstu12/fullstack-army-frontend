import {
  CardContent,
  Grid,
  Card,
  Avatar,
  Typography,
  Chip,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Paper,
  FormControl,
  InputLabel,
  InputBase,
  InputAdornment,
  Input,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/system";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";

const StyledCard = styled(Card)(({ theme }) => ({
  ["&.sidebar"]: {
    borderRadius: "20px",
  },
  ["& .topSidebar"]: {
    background: "#080722",
    height: "40vh",
    ["& .chipLevel"]: {
      background: "#6000d4",
      color: "#fff",
      transform: "translateX(50%)",
      margin: "1rem 0",
    },
  },
  ["& .bottomFooter"]: {
    background: "#080722",
    color: "white",
    padding: "0.8rem",
    textAlign: "center",
    marginBottom: "1rem",
    borderRadius: "15px",
  },
  ["& .bottomSidebar"]: {
    background: "#152348",
    height: "50vh",
  },
  ["&.body"]: {
    background: "#efe",
    height: "90vh",
    // width: "100%",
    marginLeft: "1rem",
    borderRadius: "20px",
    padding: "2rem",
  },
}));

const StyledBox = styled(Box)((props) => ({
  "&.box": {
    display: props.display,
    justifyContent: "space-between",
  },
}));
const StyledPaper = styled(Paper)((props) => ({
  "&.paper": {
    // width: "3rem",
    // height: "3rem",
    color: props.color ?? "white",
    background: props.background ?? "white",
  },
}));
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#a9e9aac7" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
export default function MuiDesignTest() {
  return (
    <Grid container p={3}>
      <Grid item xs={12} sm={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} sm={10}>
        <BodyContainer />
      </Grid>
    </Grid>
  );
}

const Sidebar = () => {
  return (
    <StyledCard className="sidebar">
      <CardContent className="topSidebar">
        <Avatar
          alt="name"
          src="demo.jpg"
          sx={{ width: 120, height: 120, mx: "auto", mb: "1rem" }}
        />
        <Typography variant="h5" align="center" color={"white"}>
          Mazharul Islam
        </Typography>
        <Chip label="Pro Level" className="chipLevel" />
      </CardContent>
      {/* bottom */}
      <CardContent className="bottomSidebar">
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon sx={{ color: "white" }} />
                  ) : (
                    <MailIcon sx={{ color: "white" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Paper elevation={1} className="bottomFooter">
          <Typography variant="caption">Having Troubles?</Typography>
          <Typography variant="subtitle2">Contacts Us</Typography>
        </Paper>
      </CardContent>
    </StyledCard>
  );
};

const BodyContainer = () => {
  return (
    <StyledCard className="body">
      <StyledBox className="box" display="flex">
        <Typography variant="h5">
          <span style={{ fontWeight: "700" }}>Good Morning</span> Mazharul Islam
        </Typography>
        <FormControl variant="standard">
          <BootstrapInput
            defaultValue=""
            placeholder="Search "
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
      </StyledBox>
      <Grid container spacing={2} py={2}>
        <Grid item xs={12} sm={6} md={4}>
          <StyledPaper className="paper" background="#6000d4">
            <AccessAlarmsIcon fontSize="large" />
            <Typography variant="h6">Earnings</Typography>
            <Typography variant="h5">120000 $</Typography>
            <Chip>+ 10% since last month</Chip>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledPaper className="paper" background="#6000d4">
            <AccessAlarmsIcon fontSize="large" />
            <Typography variant="h6">Earnings</Typography>
            <Typography variant="h5">120000 $</Typography>
            <Chip>+ 10% since last month</Chip>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledPaper className="paper" background="#6000d4">
            <AccessAlarmsIcon fontSize="large" />
            <Typography variant="h6">Earnings</Typography>
            <Typography variant="h5">120000 $</Typography>
            <Chip>+ 10% since last month</Chip>
          </StyledPaper>
        </Grid>
      </Grid>
    </StyledCard>
  );
};
