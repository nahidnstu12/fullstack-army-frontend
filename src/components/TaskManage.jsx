import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { priority } from "../data";
import { Chip, Box } from "@mui/material";
import { SubTaskForm } from "./ProjectForm";
import { useSelector } from 'react-redux';

export default function TaskLists({projectId}) {
  
  const [expanded, setExpanded] = React.useState(false);
  const {taskList} = useSelector(state => state.tasks)
  const {subtaskList} = useSelector(state => state.subtasks)
  const {userlists} = useSelector(state => state.users)

  console.log({taskList, subtaskList, projectId})

  const handleChange = (panel) => (event, isExpanded) => {
    console.log(event.target);
    setExpanded(isExpanded ? panel : false);
  };

  const assignUser = (id) => {
    return userlists.find(user => user.id === id).username
  } 
  // console.log(assignUser(1));
  return (
    <div className="mb-10">
      {taskList.filter(i => i.project_id == projectId ).map((item) => (
        <Accordion
          expanded={expanded === "panel" + item.id}
          onChange={handleChange("panel" + item.id)}
          key={item.id}

        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {item.task_title}
            </Typography>
            <Box className="flex">
            <Typography sx={{ color: "text.secondary", margin: "0 4px" }}>
              <Chip className="capitalize" label={assignUser(item.task_user)} color="primary" />
            </Typography>
            <Typography sx={{ color: "text.secondary", margin: "0 4px" }}>
              <Chip label={priority[item.task_priority-1].name} color="warning" />
            </Typography>
            <Typography sx={{ color: "text.secondary", margin: "0 4px" }}>
              <Chip label={item.task_date} color="secondary" />
            </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {/* sub task form */}

            <SubTaskForm taskId={item.id}/>

            <Box className="my-5">
              {
                subtaskList.filter(it => it.task_id === item.id).map((subtask) => (
                  <Box className="flex justify-between gap-4 my-2" key={subtask.id}>
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      {subtask.subtask_title}
                    </Typography>
                    <Box className="flex">
                    <Typography
                      sx={{ color: "text.secondary", margin: "0 4px" }}
                    >
                      <Chip className="capitalize" label={assignUser(subtask.subtask_user)} color="primary" />
                    </Typography>
                    <Typography
                      sx={{ color: "text.secondary", margin: "0 4px" }}
                    >
                      <Chip label={priority[subtask.subtask_priority].name} color="warning" />
                    </Typography>
                    <Typography
                      sx={{ color: "text.secondary", margin: "0 4px" }}
                    >
                      <Chip label={subtask.subtask_date} color="secondary" />
                    </Typography>
                    </Box>
                  </Box>
                ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
