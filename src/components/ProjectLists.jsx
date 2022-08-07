import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { projectlists } from '../data';

export default function ProjectLists() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
// const lists = projectlists[0].tasks;
// console.log(lists);
  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        {projectlists[0].tasks.map(item =>
        <>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {item.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{item.assign_id}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{item.status}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{item.date}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
        </> 
         )} 
        
      </Accordion>
     
    </div>
  );
}
