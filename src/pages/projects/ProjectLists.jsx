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
import { ProjectForm } from "../../components/ProjectForm";
import {  useSelector } from 'react-redux';

export default function ProjectLists() {
  const {projectlists} = useSelector(state => state.projects)
  return (
    
    <div className="mx-auto w-9/12">
      <Box className={"flex gap-4"}>
        <Link to={"/"}>Home</Link>
        <Link to={"/users"}>User</Link>
        <Typography>Project Lists</Typography>
      </Box>

      <ProjectForm />
      <Grid container className={"my-5"}>
        {projectlists.map((item) => (
          <Grid item md={6} key={item.id} className={"py-4 pr-4"}>
            <ProjectItem item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const ProjectItem = ({item}) => {
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
          {item.project_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {item.project_description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/projects/${item.id}`}>
          <Button size="small">See All Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
