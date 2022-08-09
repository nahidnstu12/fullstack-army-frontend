import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { priority, projectlists } from "../data";
import { Chip, Box } from "@mui/material";
import { SubTaskForm } from "./ProjectForm";
import { useDispatch, useSelector } from 'react-redux';

export default function TaskLists() {
  const [expanded, setExpanded] = React.useState(false);
  const {taskList} = useSelector(state => state.tasks)

  console.log(taskList)

  const handleChange = (panel) => (event, isExpanded) => {
    console.log(event.target);
    setExpanded(isExpanded ? panel : false);
  };
  // const lists = projectlists[0].tasks;
  // console.log(lists);
  return (
    <div>
      {taskList.map((item) => (
        <Accordion
          expanded={expanded === "panel" + item.id}
          onChange={handleChange("panel" + item.id)}
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
              <Chip label={item.task_user} color="primary" />
            </Typography>
            <Typography sx={{ color: "text.secondary", margin: "0 4px" }}>
              <Chip label={priority[item.task_priority].name} color="warning" />
            </Typography>
            <Typography sx={{ color: "text.secondary", margin: "0 4px" }}>
              <Chip label={item.task_date} color="secondary" />
            </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {/* sub task form */}

            <SubTaskForm />

            <Box className="my-5">
              {
                item?.subtasks?.map((subtask) => (
                  <Box className="flex justify-between gap-4 my-2" key={item.id}>
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      {subtask.title}
                    </Typography>
                    <Box className="flex">
                    <Typography
                      sx={{ color: "text.secondary", margin: "0 4px" }}
                    >
                      <Chip label={"Nahid"} color="primary" />
                    </Typography>
                    <Typography
                      sx={{ color: "text.secondary", margin: "0 4px" }}
                    >
                      <Chip label={subtask.status} color="warning" />
                    </Typography>
                    <Typography
                      sx={{ color: "text.secondary", margin: "0 4px" }}
                    >
                      <Chip label={subtask.date} color="secondary" />
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
