import { CardContent, Grid, Card } from "@mui/material";
import {styled} from '@mui/material/styles';

const StyledCard = styled(Card)(({theme}) => ({
  ['&.sidebar']:{
    borderRadius: '20px',
  },
  ['& .topSidebar']: {
    background: "#333",
    height: "100vh"
  }, 
  ['&.body']:{
    background: "red",

  }
}))

export default function MuiDesignTest() {
  return (
    // <Container>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Body />
        </Grid>
      </Grid>
 
    // </Container>
  );
}

const Sidebar = () => {
  return(
    <StyledCard className="sidebar">
      <CardContent className="topSidebar">

      </CardContent>

    </StyledCard>
  )
}
const Body = () => {
  return(
    <StyledCard className="body">

    </StyledCard>
  )
}