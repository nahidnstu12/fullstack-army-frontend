import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ProjectForm } from "../components/ProjectForm";

export default function ProjectLists() {
  return (
    <div className="mx-auto w-9/12">
      <Box className={"flex gap-4"}>
        <Link to={"/"}>Home</Link>
        <Typography>Project Lists</Typography>
      </Box>

      <ProjectForm />
      <Grid container className={"my-5"}>
        {[...Array(4)].map((_, i) => (
          <Grid item md={6} key={i} className={"py-4 pr-4"}>
            <ProjectItem />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const ProjectItem = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/demo.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/projects/${1}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
