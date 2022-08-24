import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import commissioning from './commissioning.jpg'

export default function AccordionCard({cardData}) {
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${cardData.key}a-content`}
          id={`panel${cardData.key}a-header`}
        >
          <Typography>{cardData.summary}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <img src={commissioning} alt="commissioning image" width="200" />
          <Typography>
           {cardData.comments}
          </Typography>

            <div>{cardData.tdate}</div>
            <div>{cardData.thrs}</div>
          
      
        </AccordionDetails>
    </Accordion>
  
    
  );
}


