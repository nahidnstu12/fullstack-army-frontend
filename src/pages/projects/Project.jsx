import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {TaskForm} from "../../components/ProjectForm";
import TaskLists from "../../components/TaskManage";
import {  useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProjectTitle } from "../../redux/features/ProjectSlice";

export default function Project() {
  const {id: projectId} = useParams()

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProjectTitle(projectId))
  }, [projectId])
 
  const {selectedProjectTitle} = useSelector(state => state.projects)
  return (
    <div className="w-9/12 mx-auto">
      <Box className={"flex gap-4"}>
        <Link to={"/"}>Home</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/projects"}>Project Lists</Link>
        {/* add project title */}
        <Typography>{selectedProjectTitle}</Typography> 
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
