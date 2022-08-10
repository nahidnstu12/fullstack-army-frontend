import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import TaskForm from "../components/ProjectForm";
import TaskLists from "../components/TaskManage";
import {  useParams } from "react-router";

export default function Project() {
  const {id: projectId} = useParams()

  return (
    <div className="w-9/12 mx-auto">
      <Box className={"flex gap-4"}>
        <Link to={"/"}>Home</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/projects"}>Project Lists</Link>
        {/* add project title */}
        <Typography>{"Project Title"}</Typography> 
      </Box>
      <Box className="p-8" >
        <TaskForm projectId={projectId}/>
      </Box>

      <Box className="p-8">
        <TaskLists projectId={projectId}/>
      </Box>
    </div>
  );
}
