import { CardContent, Grid, Card, Avatar, Typography, Chip, ListItem, ListItemButton,ListItemIcon,ListItemText, List, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const StyledCard = styled(Card)(({ theme }) => ({
  ["&.sidebar"]: {
    borderRadius: "20px",
    
  },
  ["& .topSidebar"]: {
    background: "#080722",
    height: "40vh",
    // margin: "0 auto"
    ["& .chipLevel"]:{
      background:"#6000d4", color:"#fff", transform: "translateX(50%)", margin: "1rem 0"
    }
  },
  ["& .bottomFooter"]: {
    background: "#080722", color: "white", padding: "0.8rem", textAlign:"center", marginBottom:"1rem", borderRadius:"15px"
  },
  ["& .bottomSidebar"]: {
    background: "#152348",
    height: "50vh",
  },
  ["&.body"]: {
    background: "#efe",
    height: "100vh",
    width: "100%",
  },
}));

export default function MuiDesignTest() {
  return (
    <Grid container m={3}>
      <Grid item xs={12} sm={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} sm={9}>
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
          sx={{ width: 120, height: 120, mx:'auto', mb:'1rem' }}
        />
        <Typography variant="h5" align="center" color={"white"}>Mazharul Islam</Typography>
        <Chip label="Pro Level" className="chipLevel" />
      </CardContent>
      {/* bottom */}
      <CardContent className="bottomSidebar">
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding >
            <ListItemButton>
              <ListItemIcon >
                {index % 2 === 0 ? <InboxIcon sx={{color: 'white'}}/> : <MailIcon sx={{color: 'white'}}/>}
              </ListItemIcon>
              <ListItemText primary={text} sx={{color: 'white'}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Paper elevation={1} className="bottomFooter"  >
        <Typography variant="caption">Having Troubles?</Typography>
        <Typography variant="subtitle2">Contacts Us</Typography>
      </Paper>
      </CardContent>
    </StyledCard>
  );
};
const BodyContainer = () => {
  return <StyledCard className="body"></StyledCard>;
};
