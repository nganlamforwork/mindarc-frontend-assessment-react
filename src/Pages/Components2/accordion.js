import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '@media (min-width: 601px)': {
      display: 'none',
  }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    fontWeight: 'bold'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
/*===========HANDLE DATA===========*/
  const data = props.data;
  const accordion = [];
  for (let i = 0; i<data.length; i++){
      const x=data[i];
      accordion.push(
        <Accordion key={i} expanded={expanded === `panel${i+1}`} onChange={handleChange(`panel${i+1}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${i+1}a-content`}
            id={`panel${i+1}a-id`}
          >
            <Typography className={classes.heading}>{x.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div dangerouslySetInnerHTML={{__html: x.content}} className={classes.data} />
            </Typography>
          </AccordionDetails>
        </Accordion>
      )
  }
/*===========END HANDLE DATA===========*/

  return (
    <div className={classes.root}>
      {accordion}
    </div>
  );
}
