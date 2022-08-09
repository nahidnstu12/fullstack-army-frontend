import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import TaskForm from "../components/ProjectForm";
import TaskLists from "../components/TaskLists";

export default function Project() {
  return (
    <div className="w-9/12 mx-auto">
      <Box className={"flex gap-4"}>
        <Link to={"/"}>Home</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/projects"}>Project Lists</Link>
        <Typography>{"Project Title"}</Typography>
      </Box>
      <Box className="p-8" >
        <TaskForm />
      </Box>

      <Box className="p-8">
        <TaskLists />
      </Box>
    </div>
  );
}
