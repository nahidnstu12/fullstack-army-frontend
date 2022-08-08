import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { projectlists } from "../data";
import { Chip, Box } from "@mui/material";
import { SubTaskForm } from "./ProjectForm";

export default function ProjectLists() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    console.log(event.target);
    setExpanded(isExpanded ? panel : false);
  };
  // const lists = projectlists[0].tasks;
  // console.log(lists);
  return (
    <div>
      {projectlists[0].tasks.map((item) => (
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
              {item.title}
            </Typography>
            <Typography sx={{ color: "text.secondary", margin: "0 4px" }}>
              <Chip label={"Nahid"} color="primary" />
            </Typography>
            <Typography sx={{ color: "text.secondary", margin: "0 4px" }}>
              <Chip label={item.status} color="warning" />
            </Typography>
            <Typography sx={{ color: "text.secondary", margin: "0 4px" }}>
              <Chip label={item.date} color="secondary" />
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <SubTaskForm />
            </Box>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
