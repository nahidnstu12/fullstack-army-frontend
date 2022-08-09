import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import TaskForm from "../components/ProjectForm";
import TaskLists from "../components/TaskLists";
import ProjectLists from "./ProjectLists";

export default function Project() {
  return (
    <div className="w-9/12">
      <Box className={"flex gap-4"}>
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Project Lists</Link>
        <Typography>{"Project Title"}</Typography>
      </Box>
      <Box sx={{ margin: "0 auto", padding: "2rem" }}>
        <TaskForm />
      </Box>

      <Box sx={{ margin: "0 auto", padding: "2rem" }}>
        <TaskLists />
      </Box>
    </div>
  );
}
